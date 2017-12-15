import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import BuildingComponent from '../../components/BuildingComponent';
import CategoryComponent from '../../components/CategoryComponent';
import SpecComponent from '../../components/AI/SpecComponent';
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
      cost: 0, // Current cost of the building spec
      showBudgetModal: false,
      buildings: [],
      recommends: [],
      buildingIDs: [],
      isLoading: false,
      recommendViews: null
    };

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

  async requestRecommends() {
    try {

      this.setState({
        isLoading: true,
        buildingID: []
      });

      let ids = [];

      for (let product of this.state.buildings) {
        ids.push(product.productType.toLowerCase() + '_' + product.id);
      }

      var url = 'http://52.221.73.154:1521/price/' + this.state.budget + '/[' + ids.toString() + ']';

      var response = await fetch(url);
      var responseJson = await response.json();

      let specs = responseJson;

      let views = [];

      if (responseJson.length == 0) {
        views.push(
          <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <Text style={{ fontSize: 16, color: Color.primaryText }}>
              Your preference is not possible. Please try again.
          </Text>
          </View>
        );
      }

      else {
        for (let indx = 0; indx < specs.length; indx++) {
          let obj = specs[indx];
          let order = indx + 1;
          views.push(
            <SpecComponent
              key={indx}
              priority={order}
              point={obj[obj.length - 2].total_score}
              price={obj[obj.length - 1].total_price}
              onPress={this.navigateToSpec.bind(this, obj)}>
            </SpecComponent>
          );
        }
      }

      this.setState({
        isLoading: false,
        recommendViews: views,
        buildingIDs: ids
      });

    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false
      });
    }
  }

  updateCost() {
    let cost = this.state.cost;
    cost = 0;

    for (let build of this.state.buildings) {
      cost += build.price;
    }

    this.setState({
      cost: cost
    });
  }

  async removeBuildingComponent(indx) {
    let buildings = this.state.buildings;
    let cost = this.state.cost;

    cost -= buildings[indx].price;
    this.setState({
      cost: cost
    });

    buildings.splice(indx, 1);
    this.setState({
      buildings: buildings
    });

    this.updateCost();

    // Save building spec
    try {
      await AsyncStorage.setItem('buildingSpec', JSON.stringify(this.state.buildings));
      await AsyncStorage.setItem('cost', JSON.stringify(this.state.cost));
    } catch (error) {
      alert(error);
    }
  }

  isNewProduct(product) {
    let buildings = this.state.buildings;
    for (let i in buildings) {
      if (buildings[i].productType == product.productType) {
        return false;
      }
    }
    return true;
  }

  async addNewProduct(product) {

    if (this.state.cost + product.price > this.state.budget) {
      alert('Your budget is not enough !');
      return;
    }

    ToastAndroid.show('Add ' + product.name, ToastAndroid.SHORT);

    let buildings = this.state.buildings;
    let buildingIDs = this.state.buildingIDs;

    if (this.isNewProduct(product)) {
      this.state.buildings.push(
        product
      );

      let buildingID = product.productType.toLowerCase() + '_' + product.id;

      buildingIDs.push(
        buildingID
      );

      this.setState({
        buildingIDs: buildingIDs
      });
    }

    else {
      for (let i in buildings) {
        if (buildings[i].productType == product.productType) {
          buildings[i] = product;
          this.setState({
            buildings: buildings
          });
        }
      }

      for (let i in buildingIDs) {
        if (buildingIDs[i] == product.productType.toLowerCase() + '_' + product.id) {
          buildingIDs[i] = product.productType.toLowerCase() + '_' + product.id;
          this.setState({
            buildingIDs: buildingIDs
          });
        }
      }
    }

    this.updateCost();

    // Save building spec
    try {
      await AsyncStorage.setItem('buildingSpec', JSON.stringify(this.state.buildings));
      await AsyncStorage.setItem('cost', JSON.stringify(this.state.cost));
    } catch (error) {
      alert(error);
    }
  }

  async loadBuildingSpec() {
    try {
      let responseBuildings = await AsyncStorage.getItem('buildingSpec');
      let responseCost = await AsyncStorage.getItem('cost');
      let buildings = await JSON.parse(responseBuildings) || [];
      let cost = await JSON.parse(responseCost) || 0;
      this.setState({
        buildings: buildings,
        cost: cost
      });

    } catch (error) {
      alert(error);
    }
  }

  componentDidMount() {
    this.initSpecViews();
    this.loadBuildingSpec();
  }

  componentWillReceiveProps(nextProps) {
    let product = nextProps.newProduct;
    this.addNewProduct(product);
  }

  navigateToSpec(dataToPass) {
    this.navigator.navigate('Spec', { spec: dataToPass });
  }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("Detail", { product: dataToPass, showAddButton: false });
  }

  navigateToProduct(dataToPass) {
    this.navigator.navigate("Product", {
      productType: dataToPass,
      buildings: this.state.buildings,
      budget: this.state.budget
    });
  }

  renderBuildings() {
    let buildings = this.state.buildings;
    if (buildings.length > 0) {
      const views = [];
      for (let indx in buildings) {
        let obj = buildings[indx];
        views.push(
          <BuildingComponent product={obj} onPress={this.navigateToDetail.bind(this, obj)}
            onDelete={this.removeBuildingComponent.bind(this, indx)}>
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

  initSpecViews() {
    let view = (
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Text style={{ fontSize: 16, color: Color.primaryText }}>
          Click the 'Generate' button to show recommended specs
          </Text>
      </View>
    );

    this.setState({
      recommendViews: view
    });
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
              <Text style={local.titleText}>Set your budget (Baht)</Text>
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
        <Spinner visible={this.state.isLoading} textContent={""} color={Color.secondary}>
        </Spinner>
        {this.renderBudgetModal()}
        <View style={[Style.container, { paddingBottom: 0 }]}>
          <ScrollView>
            <View style={[local.currentBuild, Style.card]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <Text style={local.titleText}>Preference</Text>
                </View>
              </View>

              <View style={{ padding: 5 }}>
                <View style={[Style.colContent, { paddingHorizontal: 10, paddingVertical: 5 }]}>
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

                <View style={[Style.colContent, { paddingHorizontal: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: Color.primaryLight }]}>
                  <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Text style={Style.whiteText}>Cost (Baht)</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={Style.whiteText}>{this.state.cost}</Text>
                  </View>
                </View>

                <View style={{ paddingHorizontal: 5, paddingTop: 10 }}>
                  <ScrollView horizontal={true}>
                    {this.renderBuildings()}
                  </ScrollView>
                </View>

                <View style={{ alignItems: 'flex-end', padding: 5 }}>
                  <TouchableOpacity style={local.primaryButton} onPress={this.requestRecommends.bind(this)}>
                    <Text style={{ color: Color.primaryText, fontWeight: 'bold' }}>Generate</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            <View style={[Style.card, { marginBottom: 10 }]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={[Style.colContent]}>
                    <View style={Style.centerVertical}>
                      <Image style={local.titleIcon} source={require('../../assets/icons/star.png')}></Image>
                    </View>
                    <View style={{ paddingLeft: 5 }}>
                      <Text style={local.titleText}>Recommend specs</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ padding: 5 }}>
                {this.state.recommendViews}
              </View>

            </View>

            <View style={[Style.card, { marginBottom: 10 }]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <Text style={local.titleText}>Category</Text>
                </View>
              </View>

              <View>
                <CategoryComponent text={"CPU"}
                  onPress={this.navigateToProduct.bind(this, "CPU")}></CategoryComponent>
                <CategoryComponent text={"VGA"}
                  onPress={this.navigateToProduct.bind(this, "VGA")}></CategoryComponent>
                <CategoryComponent text={"RAM"}
                  onPress={this.navigateToProduct.bind(this, "RAM")}></CategoryComponent>
                <CategoryComponent text={"Mainboard"}
                  onPress={this.navigateToProduct.bind(this, "Mainboard")}></CategoryComponent>
                <CategoryComponent text={"SSD"}
                  onPress={this.navigateToProduct.bind(this, "SSD")}></CategoryComponent>
                <CategoryComponent text={"Harddisk"}
                  onPress={this.navigateToProduct.bind(this, "Harddisk")}></CategoryComponent>
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
  },
  titleIcon: {
    width: 20,
    height: 20,
    tintColor: Color.secondary
  },
});