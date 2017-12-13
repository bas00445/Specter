import React, { Component } from 'react';
import Theme from '../styles/Global';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class DrawerItem extends Component {

  constructor(props) {
    super(props);

    switch(this.props.iconName) {
      case 'Builder': {
        this.icon = require('../assets/icons/build.png');
      } break;
      case 'AI Builder': {
        this.icon = require('../assets/icons/ai.png');
      } break;
      case 'Favorite': {
        this.icon = require('../assets/icons/heart.png');
      } break;
      case 'About': {
        this.icon = require('../assets/icons/about.png');
      } break;
    }
  }

  render() {
    var active = this.props.active == null ? false: this.props.active;
    if (active) {
      var tintColor = Color.secondary;
      var itemColor = Color.grey;
    } else {
      var tintColor = Color.secondary;;
      var itemColor = null;
    }
    return (
      <TouchableOpacity onPress={this.props.onPress} 
        style={[local.drawerItem, {backgroundColor: itemColor}]}>
        <View style={Style.colContent}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image style={[Style.drawerIcon, {tintColor: tintColor}]} source={this.icon}></Image>
          </View>
          <View style={{flex: 3, justifyContent: 'center'}}>
            <Text style={{fontSize: 14, color: Color.primaryText}}>{this.props.iconName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

var local = StyleSheet.create({
  drawerItem: {
    paddingLeft: 0,
    paddingTop: 8,
    paddingBottom: 8
  },
});