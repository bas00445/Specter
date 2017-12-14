import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import Modal from 'react-native-modal'
import ProductComponent from '../../components/ProductComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class AIDetailPage extends Component {

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.navigator = navigation;

    switch (this.props.product.type) {
      case 'CPU': {
        this.previewImg = require('../../assets/images/ryzen3.png');
      } break;
      case 'RAM': {
        this.previewImg = require('../../assets/images/corsair.jpg');
      } break;
      case 'VGA': {
        this.previewImg = require('../../assets/images/1050.jpg');
      } break;
      case 'Mainboard': {
        this.previewImg = require('../../assets/images/mainboard.jpg');
      } break;
      case 'Storage': {
        this.previewImg = require('../../assets/images/storage.png');
      } break;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={"Product Detail"} navigation={this.navigator} type={"stack"}></PageHeader>
        <View style={[Style.container, { paddingBottom: 0 }]}>
          <ScrollView>

            <View style={Style.card}>
              <View style={local.productImageContainer}>
                <Image source={this.previewImg}
                  style={local.productImage}></Image>
              </View>
              <View style={local.title}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={local.titleText}>{this.props.product.name}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={local.priceText}>
                    {this.props.product.price} Baht
                  </Text>
                </View>
              </View>
            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.normalTitle}>
                  <Text style={local.normalTitleText}>Detail</Text>
                </View>
              </View>

              <View style={{ padding: 5, height: 300 }}>

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
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  productImageContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  productImage: {
    alignSelf: 'center',
    height: 250,
    resizeMode: 'contain'
  },
  priceText: {
    fontSize: 18,
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
  addButton: {
    backgroundColor: Color.secondary,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.primaryText
  }
});