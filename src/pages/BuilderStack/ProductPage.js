import React, { Component } from 'react';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import ProductFilter from '../../components/ProductFilter';
import ProductComponent from '../../components/ProductComponent';
import RecommendProducts from '../../components/RecommendProducts';
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
          <RecommendProducts></RecommendProducts>
          <ProductFilter></ProductFilter>
          <FlatList
            data={[
              {name: 'Ryzen 5 1200 Premium Edition Extreme Ryzen 5 1200 Premium Edition Extreme', price: 3000, key: '0'}, 
              {name: 'Ryzen 4 5900', price: 2500, key: '3'},
              {name: 'Ryzen 3 5200', price: 5555, key: '4'}, 
              {name: 'Ryzen 9 x999', price: 7777, key: '7'},
              {name: 'Ryzen 10 3350', price: 4444, key: '8'}, 
              {name: 'Ryzen X 1000', price: 2255, key: '11'},]}
            renderItem={({item}) => 
              <ProductComponent 
                key={item.key} 
                name={item.name}
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