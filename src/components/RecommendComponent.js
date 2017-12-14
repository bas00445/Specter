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

export default class RecommendComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={local.container}>
        <View style={local.imageContainer}>
          <Image style={local.image}
            source={{ uri: this.props.image }}>
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

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={local.addButton} onPress={this.props.onAddComponent}>
              <Text style={local.addButtonText}>Add</Text>
            </TouchableOpacity>
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
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  detailContainer: {
    flex: 1,
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
  addButton: {
    backgroundColor: Color.secondary,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.primaryText
  }
});