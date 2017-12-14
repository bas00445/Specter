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

export default class RamDetail extends Component {

  constructor(props) {
    super(props);

    this.initView();
  }

  initView() {
    this.productDetail = (
      <View>
        <View style={local.rowContent}>
          <Text style={local.primaryText}>Brand:</Text>
          <Text style={local.detailText}>{this.props.product.brand}</Text>
        </View>
        <View style={local.rowContent}>
          <Text style={local.primaryText}>Type:</Text>
          <Text style={local.detailText}>{this.props.product.type}</Text>
        </View>
        <View style={local.rowContent}>
          <Text style={local.primaryText}>Capacity:</Text>
          <Text style={local.detailText}>{this.props.product.capacity}</Text>
        </View>
        <View style={local.rowContent}>
          <Text style={local.primaryText}>Bus speed:</Text>
          <Text style={local.detailText}>{this.props.product.ram_bus} Mhz</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={local.container}>
        {this.productDetail}
      </View>
    );
  }
}

var local = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContent: {
    flexDirection: 'row'
  },
  primaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.primaryText,
    marginRight: 10,
    marginBottom: 10
  },
  detailText: {
    fontSize: 16,
    color: Color.primaryText
  },
});