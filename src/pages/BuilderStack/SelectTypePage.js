import React, { Component } from 'react';
import Theme from '../../styles/Global';
import NativeButton from '../../components/NativeButton';
import PageHeader from '../../components/PageHeader';
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

class TypeComponent extends Component {
  render() {
    return (
      <View style={[Style.colContent, {justifyContent: 'center', padding: 10, 
            borderBottomWidth: 1, borderBottomColor: Color.secondaryGrey}]}>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text style={{fontSize: 16, color: Color.secondary}}>
            {this.props.text}
          </Text>
        </View>
        <TouchableOpacity 
          style={{flex: 1, alignItems: 'flex-end'}}
          onPress={this.props.onPress}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image style={{width: 20, height: 20, tintColor: Color.secondary}} 
              source={require("../../assets/icons/list-add.png")}></Image>
          </View>
        </TouchableOpacity>
      </View> 
    );
  }
} 

export default class SelectTypePage extends Component {
  static navigationOptions = {
    title: 'Builder',
  };

  constructor(props) {
    super(props);
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

          <View style={[local.currentBuild, local.box]}>
            <View style={local.highlightBox}>
              <Text style={local.title}>Building</Text>
            </View>
            <View style={{flex: 1}}>
              <ScrollView horizontal={true}>
                
              </ScrollView>
            </View>
          </View>

          <View style={[local.selectType, local.box]}>
            <View style={local.highlightBox}>
              <Text style={local.title}>Select Type</Text>
            </View>
            <View style={{flex: 1, padding: 10}}>
              <ScrollView>
                <TypeComponent text={"CPU"} 
                  onPress={this.navigateToProduct.bind(this, "CPU")}></TypeComponent>
                <TypeComponent text={"Graphic card"} 
                  onPress={this.navigateToProduct.bind(this, "Graphic card")}></TypeComponent>
                <TypeComponent text={"Memory"} 
                  onPress={this.navigateToProduct.bind(this, "Memory")}></TypeComponent>
                <TypeComponent text={"Mainboard"} 
                  onPress={this.navigateToProduct.bind(this, "Mainboard")}></TypeComponent>
                <TypeComponent text={"Storage"} 
                  onPress={this.navigateToProduct.bind(this, "Storage")}></TypeComponent>
                <TypeComponent text={"Power supply"} 
                  onPress={this.navigateToProduct.bind(this, "Power supply")}></TypeComponent>
                <TypeComponent text={"Monitor"} 
                  onPress={this.navigateToProduct.bind(this, "Monitor")}></TypeComponent>
                  
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  currentBuild: {
    flex: 3,
    marginBottom: 15
  },
  highlightBox: {
    backgroundColor: Color.secondary
  },
  selectType: {
    flex: 7,
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
    borderRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  }
});