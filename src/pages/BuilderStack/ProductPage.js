import React, { Component } from 'react';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import ProductFilter from '../../components/ProductFilter';
import ProductComponent from '../../components/ProductComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
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
        <PageHeader headerText={this.props.data} navigation={navigation} type={"stack"}></PageHeader>
        <View style={Style.container}>
          <ProductFilter></ProductFilter>

          <FlatList
            data={[
              {compType: 'Ryzen 3 1200', price: 3000, key: '0'}, 
              {compType: 'Corsair', price: 9000, key: '1'}, 
              {compType: 'Asus GTX 1050Ti', price: 1000, key: '2'}, 
              {compType: 'Ryzen 3 1200', price: 2500, key: '3'},
              {compType: 'Ryzen 3 1200', price: 5555, key: '4'}, 
              {compType: 'Corsair', price: 9999, key: '5'}, 
              {compType: 'Asus GTX 1050Ti', price: 4000, key: '6'}, 
              {compType: 'Ryzen 3 1200', price: 7777, key: '7'},
              {compType: 'Ryzen 3 1200', price: 4444, key: '8'}, 
              {compType: 'Corsair', price: 1111, key: '9'}, 
              {compType: 'Asus GTX 1050Ti', price: 5555, key: '10'}, 
              {compType: 'Ryzen 3 1200', price: 2255, key: '11'},]}
            renderItem={({item}) => 
              <ProductComponent 
                key={item.key} 
                name={item.compType}
                price={item.price}>
              </ProductComponent>}
            />
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});