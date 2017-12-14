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

export default class MainboardDetail extends Component {

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
        <Text style={local.primaryText}>Socket:</Text>
        <Text style={local.detailText}>{this.props.product.socket}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Chipset:</Text>
        <Text style={local.detailText}>{this.props.product.chipset}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>CPU generation:</Text>
        <Text style={local.detailText}>{this.props.product.cpu_generation}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>CPU model:</Text>
        <Text style={local.detailText}>{this.props.product.cpu_model}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>RAM slot:</Text>
        <Text style={local.detailText}>{this.props.product.ram_slot}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>RAM type:</Text>
        <Text style={local.detailText}>{this.props.product.ram_type}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>RAM capacity:</Text>
        <Text style={local.detailText}>{this.props.product.ram_capacity}</Text>
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