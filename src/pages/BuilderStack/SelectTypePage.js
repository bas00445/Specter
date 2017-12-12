import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Modal from 'react-native-modal'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import BuildingComponent from '../../components/BuildingComponent';
import CategoryComponent from '../../components/CategoryComponent';
import CustomSlider from '../../components/CustomSlider';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput
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
      buildings: [
        {type:"RAM", price:1500, name: "Corsair"},
        {type:"VGA", price:5999, name: "Asus GTX 1050Ti"},
        {type:"CPU", price:6000, name: "Ryzen 3 1200"},
      ]
    };
  }

  setTempBudget(value) {
    this.setState({
      tempBudget: value
    });
  }

  setBudget() {
    this.setState({
      budget: this.state.tempBudget
    });
    this.setState({
      showBudgetModal: false,
    })
  }

  removeBuildingComponent(indx) {
    let temp = this.state.buildings;
    temp.splice(indx, 1);
    this.setState({
      buildings: temp
    });
  }

  navigateToDetail(dataToPass) {
    this.stackNavigator.navigate("Detail", {data: dataToPass});
  }

  navigateToProduct(dataToPass) {
    this.stackNavigator.navigate("Product", {data: dataToPass});
  }

  renderBuildings() {
    
    let buildings = this.state.buildings;
    if (buildings.length > 0) {
      const views = [];
      for (let indx in buildings) {
        let obj = buildings[indx];
        views.push(
        <BuildingComponent type={obj.type} price={obj.price} name={obj.name} key={indx}
          onDelete={this.removeBuildingComponent.bind(this, indx)}>
        </BuildingComponent>
        );
      }
      return views;

    } else {
      return(
        <View style={{flex: 1, padding: 10}}>
          <Text style={{fontSize: 18, color: Color.primaryText}}>No building components</Text>
        </View>  
      )
    }

    
  }

  renderBudgetModal() {
  return (
    <Modal 
      animationIn="slideInUp"
      isVisible={this.state.showBudgetModal}
      onBackButtonPress={() => {this.setState({showBudgetModal: false})}}
      onBackdropPress={() => {this.setState({showBudgetModal: false})}}>

      <View style={local.modalContainer}>
        <View style={Style.colContent}>
          <View style={local.budgetTitle}>
            <Text style={local.titleText}>Set your budget</Text>
          </View>
          
          <View style={{flex:1, alignItems:'flex-end'}}>
            <TouchableOpacity onPress={() => {this.setState({showBudgetModal: false})}}>
                <Image style={local.icon} source={require("../../assets/icons/close.png")}>
                </Image>
            </TouchableOpacity>
          </View>
        </View>
        
        <TextInput placeholder={"Input your budget"} 
          underlineColorAndroid={Color.secondary} 
          placeholderTextColor={'#cccccc'} style={{color: Color.primaryText}}
          onChangeText={(value) => {this.setTempBudget(value)}}></TextInput>

        <View style={{alignItems: 'flex-end', paddingHorizontal: 5, marginTop: 10}}>
          <TouchableOpacity style={local.okButton} onPress={this.setBudget.bind(this)}>
              <Text style={{color: Color.primaryText, fontWeight: 'bold'}}>OK</Text>
          </TouchableOpacity>
        </View>

      </View>

    </Modal>
    );
  }

  render() {
    const { navigation } = this.props; // pass down navigation to PageHeader
    this.stackNavigator = navigation;

    return (
      <View style={{flex: 1}}>      
        <PageHeader headerText={"Builder"} navigation={navigation} type={"drawer"}></PageHeader>
        {this.renderBudgetModal()}
        <View style={[Style.container, {paddingBottom: 0}]}>
          <ScrollView>  
            <View style={[local.currentBuild, Style.card]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <Text style={local.titleText}>Building</Text>
                </View>
              </View>

              <View style={{padding: 5}}>
                <View style={[Style.colContent, {padding: 10, borderBottomWidth: 1, borderBottomColor: Color.primaryLight}]}>
                  <View style={{flex: 1, alignItems: 'flex-start'}}>
                    <Text style={Style.whiteText}>Budget (Baht)</Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => {this.setState({showBudgetModal: true})}}>
                      <View style={Style.colContent}>
                        <Text style={Style.whiteText}>{this.state.budget}</Text>
                        <Image style={local.editIcon} 
                          source={require('../../assets/icons/edit.png')}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              <View style={{padding: 5}}>
                <ScrollView horizontal={true}>
                  {this.renderBuildings()}
                </ScrollView>
              </View>
            </View>

            <View style={[Style.card]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <Text style={local.titleText}>Category</Text>
                </View>
              </View>
              <ScrollView>
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
                <CategoryComponent text={"Power supply"} 
                  onPress={this.navigateToProduct.bind(this, "Power supply")}></CategoryComponent>
                <CategoryComponent text={"Monitor"} 
                  onPress={this.navigateToProduct.bind(this, "Monitor")}></CategoryComponent>
              </ScrollView>
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
    paddingVertical: 10,
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
  budgetTitle: {
    flex: 1,
    backgroundColor: Color.primary,
    borderRadius: 2,
    paddingHorizontal: 5
  },
  okButton: {
    paddingVertical: 10,
    paddingHorizontal: 20, 
    backgroundColor: Color.secondary, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 2,
  },
  modalContainer: {
    backgroundColor: Color.primary,
    padding: 15
  }
});