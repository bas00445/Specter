import React, { Component } from 'react';
import Theme from '../styles/Global';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class ProductComponent extends Component {

  constructor(props) {
    super(props);
    switch (this.props.type) {
      case 'CPU': {
        this.previewImg = require('../assets/images/ryzen3.png');
      } break;
      case 'VGA card': {
        this.previewImg = require('../assets/images/1050.jpg');
      } break;
      case 'Memory': {
        this.previewImg = require('../assets/images/corsair.jpg');
      } break;
      case 'Mainboard': {
        this.previewImg = require('../assets/images/mainboard.jpg');
      } break;
      case 'Storage': {
        this.previewImg = require('../assets/images/storage.png');
      } break;
    }
    // this.previewImg = 'https://www.jib.co.th/img_master/product/original/20170725134516_1.png';
    // source={{uri:this.previewImg}}
  }

  addToSpec() {
    const paramsAction = NavigationActions.setParams({
      params: {
        newProduct: this.props.product
      },
      key: 'SelectType',
    });
    this.stackNavigator.dispatch(paramsAction);
  }

  render() {
    return (
      <View style={[Style.card, local.container]}>
        <View style={local.imageContainer}>
          <Image style={local.image}
            source={this.previewImg}>
          </Image>
        </View>
        <TouchableOpacity onPress={this.props.onPress} style={local.detailContainer}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={local.detailText} numberOfLines={2}
              ellipsizeMode='tail'>{this.props.name}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={[Style.centerVertical, { flex: 1 }]}>
              <Text style={local.priceText}>{this.props.price + " Baht"}</Text>
            </View>
            <View style={[Style.centerVertical]}>
              <TouchableOpacity style={local.addButton} onPress={this.props.onAddComponent}>
                <Text style={local.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var local = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Color.primary,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  detailContainer: {
    flex: 2,
    paddingTop: 2,
    paddingHorizontal: 10,
    backgroundColor: Color.grey,
  },
  componentTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.secondary
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Color.primaryText
  },
  addButton: {
    backgroundColor: Color.secondary,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.primaryText
  }
});