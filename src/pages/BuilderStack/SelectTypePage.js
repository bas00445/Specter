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
  TouchableNativeFeedback
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

class TypeComponent extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={[Style.card, Style.colContent, {justifyContent: 'center'}]}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{fontSize: 18}}>
              {this.props.text}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 18}}>
              >
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback> 
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
      <View style={{flex: 1, backgroundColor: Color.whiteGrey1}}>      
        <PageHeader headerText={"Builder"} navigation={navigation} type={"drawer"}></PageHeader>
        <View style={Style.container}>
          <ScrollView>
            <View style={{height: 200, backgroundColor: Color.pureWhite}}>
          
            </View>
            <View>
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
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});