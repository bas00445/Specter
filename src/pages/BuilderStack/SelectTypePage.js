import React, { Component } from 'react';
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
  TouchableOpacity
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
                  <TouchableOpacity>
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
                  <BuildingComponent type={"CPU"} price={3000} name={"Ryzen 3 1200"}></BuildingComponent>
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
    color: Color.primaryText,
  },
  editIcon: {
    width: 20, 
    height: 20, 
    tintColor: Color.primaryText,
    marginLeft: 10
  }
});