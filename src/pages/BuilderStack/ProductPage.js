import React, { Component } from 'react';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import ProductFilter from '../../components/ProductFilter';
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

export default class ProductPage extends Component {
  static navigationOptions = {
    title: 'Product',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props; // pass down navigation to PageHeader
    
    return (
      <View style={{flex: 1}}>      
        <PageHeader headerText={"Product"} navigation={navigation} type={"stack"}></PageHeader>
        <View style={Style.container}>
          <View>
            <Text style={Style.whiteText}>{this.props.data}</Text>
          </View>
          <ProductFilter></ProductFilter>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});