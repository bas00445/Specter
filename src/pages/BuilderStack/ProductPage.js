import React, { Component } from 'react';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import ProductFilter from '../../components/ProductFilter';
import ProductComponent from '../../components/ProductComponent';
import RecommendComponent from '../../components/RecommendComponent';
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
    this.state = {
      recommends: [
        {type:"RAM", price:1500, name: "Corsair"},
        {type:"VGA", price:5999, name: "Asus GTX 1050Ti"},
        {type:"CPU", price:6000, name: "Ryzen 3 1200"},
      ]
    }
  }

  renderRecommends() {
    let recommends = this.state.recommends;
    const views = [];
    for (let indx in recommends) {
      let obj = recommends[indx];
      views.push(
      <RecommendComponent type={obj.type} price={obj.price} name={obj.name} key={indx}>
      </RecommendComponent>
      );
    }
    return views;
  }

  render() {
    const {navigation} = this.props; // pass down navigation to PageHeader
    
    return (
      <View style={{flex: 1}}>      
        <PageHeader headerText={this.props.data} navigation={navigation} type={"stack"}></PageHeader>
        <View style={Style.container}>
          
          <View style={Style.card}>
            <View style={Style.colContent}>
              <View style={Style.indicator}></View>
              <View style={local.title}>
                <Text style={local.titleText}>Recommend</Text>
              </View>
            </View>

            <View style={{padding: 5, height: 120}}>
              <ScrollView horizontal={true}>
                {this.renderRecommends()}
              </ScrollView>
            </View>
          </View>

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
});