import React, { Component } from 'react';
import Theme from '../../styles/Global';
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

export default class DetailPage extends Component {
  static navigationOptions = {
    title: 'Product Detail',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props; // pass down navigation to PageHeader
    
    return (
      <View style={{flex: 1}}>      
        <PageHeader headerText={"Product Detail"} navigation={navigation} type={"stack"}></PageHeader>
        <View style={[Style.container, {paddingBottom: 0}]}>
          <ScrollView>

            <View style={Style.card}>
              <View style={local.productImageContainer}>
                <Image source={require('../../assets/images/ryzen3.png')}
                  style={local.productImage}></Image>
              </View>
              <View style={local.title}>
                <Text style={local.titleText}>{this.props.product.name}</Text>
                <Text style={local.priceText}>{this.props.product.price} Baht</Text>
              </View>
            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.normalTitle}>
                  <Text style={local.normalTitleText}>Detail</Text>
                </View>
              </View>

              <View style={{padding: 5, height: 300}}>

              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  title: {
    flex: 1,
    padding: 10
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  productImageContainer: {
    backgroundColor: '#ffffff', 
    alignItems: 'center'
  },
  productImage: {
    height: 250
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.secondary
  },
  normalTitle: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 5,
    backgroundColor: Color.primary,
    borderTopRightRadius: 2,
  },
  normalTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
});