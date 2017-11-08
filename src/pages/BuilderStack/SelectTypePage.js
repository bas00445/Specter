import React, { Component } from 'react';
import Theme from '../../styles/Global';
import NativeButton from '../../components/NativeButton';
import PageHeader from '../../components/PageHeader';
import BuildingComponent from '../../components/BuildingComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

class CategoryComponent extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[Style.colContent, {justifyContent: 'center', padding: 10, 
            borderBottomWidth: 1, borderBottomColor: Color.secondaryGrey}]}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{color: Color.secondary}}>
              {this.props.text}
            </Text>
          </View>
          <View 
            style={{flex: 1, alignItems: 'flex-end'}}
            onPress={this.props.onPress}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Image style={{width: 20, height: 20, tintColor: Color.secondary}} 
                source={require("../../assets/icons/list-add.png")}></Image>
            </View>
          </View>
        </View>
      </TouchableOpacity> 
    );
  }
} 

export default class SelectTypePage extends Component {
  static navigationOptions = {
    title: 'Builder',
  };

  constructor(props) {
    super(props);
    this.state = {
      budget: 20000
    };
  }

  navigateToProduct(dataToPass) {
    this.stackNavigator.navigate("Product", {data: dataToPass});
  }

  render() {
    const { navigation } = this.props; // pass down navigation to PageHeader
    this.stackNavigator = navigation;

    return (
      <View style={{flex: 1}}>      
        <PageHeader headerText={"Builder"} navigation={navigation} type={"drawer"}></PageHeader>
        <View style={Style.container}>
          <ScrollView>  
            <View style={[local.currentBuild, local.box]}>
              <View style={local.highlightBox}>
                <Text style={local.title}>Building</Text>
              </View>
              <View style={[Style.colContent, {padding: 10, borderBottomWidth: 1, borderBottomColor: Color.secondaryGrey}]}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                  <Text>Budget</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text>{this.state.budget}</Text>
                </View>
              </View>
              <View style={{padding: 5}}>
                <ScrollView horizontal={true}>
                  <BuildingComponent type={"CPU"} price={3000} name={"Ryzen 3 1200"}></BuildingComponent>
                  <BuildingComponent type={"RAM"} price={1500} name={"ASUSx782"}></BuildingComponent>
                  <BuildingComponent type={"Graphic"} price={6000} name={"Asus GTX 1050Ti"}></BuildingComponent>
                </ScrollView>
              </View>
            </View>

            <View style={[local.selectType, local.box]}>
              <View style={local.highlightBox}>
                <Text style={local.title}>Category</Text>
              </View>
              <ScrollView>
                <CategoryComponent text={"CPU"} 
                  onPress={this.navigateToProduct.bind(this, "CPU")}></CategoryComponent>
                <CategoryComponent text={"Graphic card"} 
                  onPress={this.navigateToProduct.bind(this, "Graphic card")}></CategoryComponent>
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
  highlightBox: {
    backgroundColor: Color.secondary
  },
  selectType: {
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingVertical: 10,
    color: Color.pureWhite
  },
  box: {
    margin: 5,
    borderColor: Color.primaryWhite,
    backgroundColor: Color.primaryWhite,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  }
});