
import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

// Pages
import BuilderPage from './src/pages/BuilderPage';
import FavoritePage from './src/pages/FavoritePage';
import RecommendPage from './src/pages/RecommendPage';
import SettingPage from './src/pages/SettingPage';

// Components
import DrawerComponent from './src/components/DrawerComponent';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const App = DrawerNavigator({
  Builder: {screen: BuilderPage},
  Favorite: {screen: FavoritePage},
  Recommend: {screen: RecommendPage},
  Setting: {screen: SettingPage}
},
{
  drawerWidth: 250,
  drawerPosition: 'left',
  initialRouteName: 'Builder',
  contentComponent: props => <DrawerComponent {...props}></DrawerComponent> 
});

export default App;
