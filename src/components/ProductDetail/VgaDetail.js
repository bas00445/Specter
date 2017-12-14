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

export default class VgaDetail extends Component {

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
        <Text style={local.primaryText}>Engine:</Text>
        <Text style={local.detailText}>{this.props.product.engine}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Chipset:</Text>
        <Text style={local.detailText}>{this.props.product.chipset}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Series:</Text>
        <Text style={local.detailText}>{this.props.product.series}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Technology:</Text>
        <Text style={local.detailText}>{this.props.product.technology} nm</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>GPU Speed:</Text>
        <Text style={local.detailText}>{this.props.product.gpu_speed} Mhz</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>VRAM Speed:</Text>
        <Text style={local.detailText}>{this.props.product.ram_speed} Mhz</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>VRAM Capacity</Text>
        <Text style={local.detailText}>{this.props.product.ram_capacity} GB</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>VRAM Type:</Text>
        <Text style={local.detailText}>{this.props.product.ram_type}</Text>
      </View>
      <View style={local.rowContent}>
        <Text style={local.primaryText}>Bandwidth:</Text>
        <Text style={local.detailText}>{this.props.product.bus_width} GB/s</Text>
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