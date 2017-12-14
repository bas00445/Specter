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

export default class BuildingComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={local.container}>
        <View style={local.imageContainer}>
          <Image style={local.image}
            source={{uri: this.props.product.image}}>
          </Image>
        </View>
        <TouchableOpacity onPress={this.props.onPress} style={local.detailContainer}>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => { this.props.onDelete() }}>
              <Image style={local.icon} source={require("../assets/icons/close.png")}>
              </Image>
            </TouchableOpacity>
          </View>
          <View style={[Style.centerY, { flex: 2 }]}>
            <Text style={local.componentTitleText}>{this.props.product.productType}</Text>
          </View>
          <View style={[Style.centerY, { flex: 1 }]}>
            <Text numberOfLines={2} ellipsizeMode={"tail"}
              style={[local.detailText, { textAlign: 'center' }]}>{this.props.product.name}</Text>
          </View>
          <View style={[Style.centerY, { flex: 1 }]}>
            <Text style={local.priceText}>{this.props.product.price + " Baht"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var local = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: 'row',
    margin: 5,
    borderWidth: 2,
    borderColor: Color.primary
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
    width: 130,
    height: 130,
    resizeMode: 'contain'
  },
  detailContainer: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: Color.primaryLight,
  },
  componentTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  detailText: {
    fontSize: 16,
    color: Color.primaryText,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.secondary
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: Color.primaryText
  },
});