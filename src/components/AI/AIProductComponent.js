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
  }

  render() {
    return (
      <View style={local.container}>
        <View style={local.imageContainer}>
          <Image style={local.image}
            source={{uri: this.props.image}}>
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