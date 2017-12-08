import React, { Component } from 'react';
import Theme from '../styles/Global';
import DrawerItem from '../components/DrawerItem';
import { NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  StatusBar
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class DrawerComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
    }
  }

  navigateTo(pageName) {
    this.drawerNavigation.navigate(pageName, {incomeData: 'Hello'});
    this.activeDrawerItem(pageName);
  } 
  
  activeDrawerItem(pageName) {
    switch(pageName) {
      case 'Builder': {
        this.setState({
          currentScreen: 0
        });
      }; break;
      case 'Favorite': {
        this.setState({
          currentScreen: 1
        });
      }; break;
      case 'Recommend': {
        this.setState({
          currentScreen: 2
        });
      }; break;
      case 'Setting': {
        this.setState({
          currentScreen: 3
        });
      }; break;
    }
  }

  render() {
    const { navigation } = this.props;
    this.drawerNavigation = navigation;
    return (
      
      <View style={{flex: 1}}>
        <StatusBar 
          backgroundColor={Color.primaryDark}
          barStyle="default">
        </StatusBar>

        <View style={local.drawerTitle}>
          <Text style={local.drawerTitleText}>
            Specter
          </Text>
        </View>

        <View style={[local.drawerItemsContainer, {paddingTop: 10}]}>
          <ScrollView>
            <DrawerItem iconName={"Builder"} onPress={this.navigateTo.bind(this, "Builder")}
              active={ this.state.currentScreen == 0 }></DrawerItem>
            <DrawerItem iconName={"Favorite"} onPress={this.navigateTo.bind(this, "Favorite")}
              active={ this.state.currentScreen == 1 }></DrawerItem>
            <DrawerItem iconName={"Recommend"} onPress={this.navigateTo.bind(this, "Recommend")}
              active={ this.state.currentScreen == 2 }></DrawerItem>
            <DrawerItem iconName={"Setting"} onPress={this.navigateTo.bind(this, "Setting")}
              active={ this.state.currentScreen == 3 }></DrawerItem>
            
          </ScrollView>
        </View> 

    </View>
    );
  }
}

var local = StyleSheet.create({
  drawerTitle: {
    height: 125,
    backgroundColor: Color.primary,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerTitleText: {
    color: Color.primaryText,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  drawerTitleSecondaryText: {
    color: Color.secondaryText,
    fontSize: 14
  },
  drawerItemsContainer: {
    flex: 8, 
    backgroundColor: Color.primaryWhite,
    padding: 2}
});
