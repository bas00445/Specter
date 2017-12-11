import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import BuildingComponent from '../../components/BuildingComponent';
import CategoryComponent from '../../components/CategoryComponent';
import BudgetComponent from '../../components/BudgetComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList
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
      budget: 20000,
      showBudget: false,
    };
  }

  setBudget() {
    
  }

  navigateToDetail(dataToPass) {
    this.stackNavigator.navigate("Detail", {data: dataToPass});
  }

  navigateToProduct(dataToPass) {
    this.stackNavigator.navigate("Product", {data: dataToPass});
  }

  renderBudgetModal() {
  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={this.state.showBudget}
      presentation={"formSheet"}
      onRequestClose={() => {this.setState({showBudget: false})}}>

      <View style={Style.container}>
          <View style={{alignItems:'flex-end', paddingVertical: 4}}>
              <TouchableOpacity onPress={() => {this.setState({showBudget: false})}}>
                  <Image style={local.icon} source={require("../../assets/icons/close.png")}>
                  </Image>
              </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 5, marginBottom: 5}}>
            <View style={local.budgetTitle}>
              <Text style={local.titleText}>Set your budget</Text>
            </View>
          </View>

        <View style={{flex: 5}}>
          <FlatList
            data={[
              {compType: 'CPU', key: '0'}, 
              {compType: 'VGA', key: '1'}, 
              {compType: 'Memory', key: '2'}, 
              {compType: 'Mainboard', key: '3'},
              {compType: 'Storage', key: '4'},
              {compType: 'Power supply', key: '5'},
              {compType: 'Monitor', key: '6'}]}
            renderItem={({item}) => 
              <BudgetComponent 
                key={item.key} 
                compType={item.compType}
                budgetValue={5000}>
              </BudgetComponent>}
            />
        </View>

        <View style={{flex: 1, alignItems: 'flex-end', paddingHorizontal: 5, marginTop: 10}}>
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
              <View style={[Style.colContent, {padding: 10, borderBottomWidth: 1, borderBottomColor: Color.primaryLight}]}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                  <Text style={Style.whiteText}>Budget</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <TouchableOpacity onPress={() => {this.setState({showBudget: true})}}>
                    <View style={Style.colContent}>
                      <Text style={Style.whiteText}>{this.state.budget}</Text>
                      <Image style={local.editIcon} 
                        source={require('../../assets/icons/edit.png')}></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{padding: 5}}>
                <ScrollView horizontal={true}>
                  <BuildingComponent 
                    onPress={this.navigateToDetail.bind(this, "CPU", 3000, "Ryzen 3 1200")} 
                    type={"CPU"} price={3000} name={"Ryzen 3 1200"}
                    onDelete={(value) => {alert(value)}}></BuildingComponent>
                  <BuildingComponent type={"RAM"} price={1500} name={"Corsair"}></BuildingComponent>
                  <BuildingComponent type={"VGA"} price={6000} name={"Asus GTX 1050Ti"}></BuildingComponent>
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
    paddingLeft: 10,
    paddingVertical: 10,
    backgroundColor: Color.primary,
    borderRadius: 2,
  },
  okButton: {
    padding: 10, 
    backgroundColor: Color.secondary, 
    width: 80,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 2,
  }
});