import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Modal from 'react-native-modal'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import BuildingComponent from '../../components/BuildingComponent';
import CategoryComponent from '../../components/CategoryComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class SelectTypePage extends Component {
  static navigationOptions = {
    title: 'Builder',
  };

  constructor(props) {
    super(props);
    this.state = {
      tempBudget: '',
      budget: 20000,
      showBudgetModal: false,
      buildings: []
    };

    // buildings: [
    //   {type:"RAM", price:1500, name: "Corsair"},
    //   {type:"VGA", price:5999, name: "Asus GTX 1050Ti"},
    //   {type:"CPU", price:6000, name: "Ryzen 3 1200"},
    // ]

    const { navigation } = this.props;
    this.navigator = navigation;
    this.navigator.state.key = 'SelectType'; // Set a key to this page to receive params
  }

  setTempBudget(value) {
    this.setState({
      tempBudget: value
    });
  }

  setBudget() {
    if (isNaN(this.state.tempBudget)) {
      alert('Input must be any number');
      this.setState({
        tempBudget: '',
      });
      return;
    }

    this.setState({
      budget: this.state.tempBudget
    });
    this.setState({
      showBudgetModal: false,
    })
  }

  async submitSpecToServer() {
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buget: this.state.buildings
      })
    }

    try {
      var response = await fetch('http://specter.com/api/submitSpec', data);
      var responseJson = await response.json();
      if (responseJson == 'OK') {
        ToastAndroid.show('Success', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('Fail', ToastAndroid.SHORT);
    }
  }

  async removeBuildingComponent(indx) {
    let temp = this.state.buildings;
    temp.splice(indx, 1);
    this.setState({
      buildings: temp
    });

    // Save building spec
    try {
      await AsyncStorage.setItem('buildingSpec', JSON.stringify(this.state.buildings));
    } catch (error) {
      alert(error);
    }
  }

  isNewProduct(product) {
    let buildings = this.state.buildings;
    for (let i in buildings) {
      if (buildings[i].type == product.type) {
        return false;
      }
    }
    return true;
  }

  async addNewProduct(product) {
    ToastAndroid.show('Add ' + product.name, ToastAndroid.SHORT);

    let buildings = this.state.buildings;

    if (this.isNewProduct(product)) {
      this.state.buildings.push({
        imgUrl: 'http://',
        type: product.type,
        price: product.price,
        name: product.name
      });
    }

    else {
      for (let i in buildings) {
        if (buildings[i].type == product.type) {
          buildings[i] = product;
        }
      }
    }



    // Save building spec
    try {
      await AsyncStorage.setItem('buildingSpec', JSON.stringify(this.state.buildings));
    } catch (error) {
      alert(error);
    }

    // Submit building spec to the server
    // this.submitSpecToServer();
  }

  async loadBuildingSpec() {
    try {
      let response = await AsyncStorage.getItem('buildingSpec')
      let obj = await JSON.parse(response) || [];
      this.setState({
        buildings: obj
      });

    } catch (error) {
      alert(error);
    }
  }

  async saveToFavorite() {
    // Save building spec
    try {
      await AsyncStorage.setItem('favoriteSpec', JSON.stringify(this.state.buildings));
    } catch (error) {
      alert(error);
    }
  }

  componentDidMount() {
    this.loadBuildingSpec();
  }

  componentWillReceiveProps(nextProps) {
    let product = nextProps.newProduct;
    this.addNewProduct(product);
  }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("Detail", { product: dataToPass });
  }

  navigateToProduct(dataToPass) {
    this.navigator.navigate("Product", { productType: dataToPass });
  }

  renderBuildings() {
    let buildings = this.state.buildings;
    if (buildings.length > 0) {
      const views = [];
      for (let indx in buildings) {
        let obj = buildings[indx];
        views.push(
          <BuildingComponent type={obj.type} price={obj.price} name={obj.name} key={indx}
            onDelete={this.removeBuildingComponent.bind(this, indx)} onPress={this.navigateToDetail.bind(this, obj)}>
          </BuildingComponent>
        );
      }
      return views;

    } else {
      return (
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ fontSize: 18, color: Color.primaryText }}>No building components</Text>
        </View>
      )
    }
  }

  renderBudgetModal() {
    return (
      <Modal
        animationIn="slideInUp"
        isVisible={this.state.showBudgetModal}
        onBackButtonPress={() => { this.setState({ showBudgetModal: false }) }}
        onBackdropPress={() => { this.setState({ showBudgetModal: false }) }}>

        <View style={local.modalContainer}>
          <View style={Style.colContent}>
            <View style={local.budgetTitle}>
              <Text style={local.titleText}>Set your budget</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => { this.setState({ showBudgetModal: false }) }}>
                <Image style={local.icon} source={require("../../assets/icons/close.png")}>
                </Image>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput placeholder={"Input here"}
            underlineColorAndroid={Color.secondary} selectionColor={Color.secondaryLight}
            placeholderTextColor={'#cccccc'} style={{ color: Color.primaryText }}
            onChangeText={(value) => { this.setTempBudget(value) }}></TextInput>

          <View style={{ alignItems: 'flex-end', paddingHorizontal: 5, marginTop: 10 }}>
            <TouchableOpacity style={local.primaryButton} onPress={this.setBudget.bind(this)}>
              <Text style={{ color: Color.primaryText, fontWeight: 'bold' }}>OK</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={"Builder"} navigation={this.navigator} type={"drawer"}></PageHeader>
        {this.renderBudgetModal()}
        <View style={[Style.container, { paddingBottom: 0 }]}>
          <ScrollView>
            <View style={[local.currentBuild, Style.card]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <Text style={local.titleText}>Building</Text>
                </View>
              </View>

              <View style={{ padding: 5 }}>
                <View style={[Style.colContent, { padding: 10, borderBottomWidth: 1, borderBottomColor: Color.primaryLight }]}>
                  <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={Style.whiteText}>Budget (Baht)</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => { this.setState({ showBudgetModal: true }) }}>
                      <View style={Style.colContent}>
                        <Text style={Style.whiteText}>{this.state.budget}</Text>
                        <Image style={local.editIcon}
                          source={require('../../assets/icons/edit.png')}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ padding: 5, borderBottomWidth: 1, borderBottomColor: Color.primaryLight }}>
                  <ScrollView horizontal={true}>
                    {this.renderBuildings()}
                  </ScrollView>
                </View>

                {/* <View style={{ alignItems: 'flex-end', padding: 5 }}>
                  <TouchableOpacity style={local.primaryButton} onPress={this.saveToFavorite.bind(this)}>
                    <View style={[Style.colContent, Style.centerVertical]}>
                      <Image style={local.smallIcon} source={require('../../assets/icons/save.png')}></Image>
                      <Text style={{ color: Color.primaryText, fontWeight: 'bold' }}>Save this spec</Text>
                    </View>
                  </TouchableOpacity>
                </View> */}

              </View>
            </View>

            <View style={[Style.card]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <Text style={local.titleText}>Category</Text>
                </View>
              </View>

              <View>
                <CategoryComponent text={"CPU"}
                  onPress={this.navigateToProduct.bind(this, "CPU")}></CategoryComponent>
                <CategoryComponent text={"VGA card"}
                  onPress={this.navigateToProduct.bind(this, "VGA card")}></CategoryComponent>
                <CategoryComponent text={"Memory"}
                  onPress={this.navigateToProduct.bind(this, "Memory")}></CategoryComponent>
                <CategoryComponent text={"Mainboard"}
                  onPress={this.navigateToProduct.bind(this, "Mainboard")}></CategoryComponent>
                <CategoryComponent text={"Storage"}
                  onPress={this.navigateToProduct.bind(this, "Storage")}></CategoryComponent>
              </View>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  currentBuild: {
    marginBottom: 5
  },
  title: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 5,
    backgroundColor: Color.primary,
    borderTopRightRadius: 2,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: Color.primaryText,
    marginLeft: 10
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Color.primaryText
  },
  smallIcon: {
    width: 20,
    height: 20,
    tintColor: Color.primaryText,
    marginRight: 2
  },
  budgetTitle: {
    flex: 3,
    backgroundColor: Color.primary,
    borderRadius: 2,
    paddingHorizontal: 5
  },
  primaryButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: Color.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  modalContainer: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 2
  }
});