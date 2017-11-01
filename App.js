
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

const paramsToProps = (SomeComponent) => { 
  // turns this.props.navigation.state.params into this.params.<x>
      return class extends Component {
          render() {
              const {navigation, ...otherProps} = this.props
              const {state: {params}} = navigation
              return <SomeComponent {...this.props} {...params} />
          }
      }
  }

  
const App = DrawerNavigator({
  Builder: {screen: paramsToProps(BuilderPage)},
  Favorite: {screen: paramsToProps(FavoritePage)},
  Recommend: {screen: paramsToProps(RecommendPage)},
  Setting: {screen: paramsToProps(SettingPage)}
},
{
  drawerWidth: 250,
  drawerPosition: 'left',
  initialRouteName: 'Builder',
  contentComponent: props => <DrawerComponent {...props}></DrawerComponent> 
});

export default App;
