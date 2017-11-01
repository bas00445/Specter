import React, { Component } from 'react';
import Theme from '../styles/Global';
import { NavigationActions } from 'react-navigation'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class PageHeader extends Component {

  renderHeaderButton() {
    if (this.props.type == "drawer") {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
          <Image style={Style.icon}
            source={require('../assets/icons/hamburger.png')}></Image>
        </TouchableOpacity>
      );
    } else if (this.props.type == "stack") {
      return (
      <TouchableOpacity onPress={this.returnBack.bind(this)}>
        <Image style={Style.icon}
          source={require('../assets/icons/back.png')}></Image>
      </TouchableOpacity>
      );
    }
  }

  returnBack() {
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
  }

  render() {
    return (
      <View style={local.headerLabel}>
        <View style={Style.colContent}>
          <View style={{marginRight: 10, justifyContent: 'center'}}>
            {this.renderHeaderButton()}
          </View>
          <View>
            <Text style={local.headerLabelText}>{this.props.headerText}</Text>
          </View>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
    headerLabel: {
      backgroundColor: Color.primary,
      padding: 10,
      borderColor: Color.primaryWhite,
      shadowOpacity: 0.8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      elevation: 10,
    },
    headerLabelText: {
        color: Color.primaryText,
        fontSize: 22,
        fontWeight: 'bold'
    },
});