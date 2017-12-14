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

export default class CpuDetail extends Component {

  constructor(props) {
    super(props);

    this.initView();
  }

  initView() {
    this.productDetail = (<View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Brand:</Text>
        <Text style={local.detailText}>{this.props.product.brand}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Model:</Text>
        <Text style={local.detailText}>{this.props.product.model}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Generation:</Text>
        <Text style={local.detailText}>{this.props.product.generation}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Core:</Text>
        <Text style={local.detailText}>{this.props.product.core}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Thread:</Text>
        <Text style={local.detailText}>{this.props.product.thread}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Turbo:</Text>
        <Text style={local.detailText}>{this.props.product.turbo} Ghz</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Frequency:</Text>
        <Text style={local.detailText}>{this.props.product.frequency} Ghz</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Cache L3:</Text>
        <Text style={local.detailText}>{this.props.product.cache_l3}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Socket:</Text>
        <Text style={local.detailText}>{this.props.product.socket}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Power Peak:</Text>
        <Text style={local.detailText}>{this.props.product.powerpeak} Watt</Text>
      </View>
    </View>);
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