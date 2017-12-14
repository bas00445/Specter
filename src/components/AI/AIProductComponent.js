import React, { Component } from 'react';
import Theme from '../../styles/Global';
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

export default class AIProductComponent extends Component {

  constructor(props) {
    super(props);
    switch (this.props.type) {
      case 'CPU': {
        this.previewImg = require('../../assets/images/ryzen3.png');
      } break;
      case 'VGA': {
        this.previewImg = require('../../assets/images/1050.jpg');
      } break;
      case 'RAM': {
        this.previewImg = require('../../assets/images/corsair.jpg');
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
      <View style={local.container}>
        <View style={local.imageContainer}>
          <Image style={local.image}
            source={this.previewImg}>
          </Image>
        </View>
        <TouchableOpacity onPress={this.props.onPress} style={local.detailContainer}>
          <View style={[Style.centerY, { flex: 1 }]}>
            <Text numberOfLines={2} ellipsizeMode={"tail"}
              style={[local.componentTitleText, { textAlign: 'center' }]}>{this.props.name}</Text>
          </View>
          <View style={[Style.centerY, { flex: 1 }]}>
            <Text style={local.priceText}>{this.props.price + " Baht"}</Text>
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
    borderWidth: 2,
    borderColor: Color.primary
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },
  detailContainer: {
    flex: 3,
    padding: 10,
    backgroundColor: Color.primaryLight,
  },
  componentTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.secondary
  },
});