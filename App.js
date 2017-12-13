
import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

// Pages
import FavoritePage from './src/pages/FavoritePage';
import AIBuilderPage from './src/pages/AIBuilderPage';
import SettingPage from './src/pages/SettingPage';

// BuilderStack Pages
import SelectTypePage from './src/pages/BuilderStack/SelectTypePage';
import ProductPage from './src/pages/BuilderStack/ProductPage';
import DetailPage from './src/pages/BuilderStack/DetailPage';

// Components
import DrawerComponent from './src/components/DrawerComponent';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


// Wrapper function

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

const BuilderStack = StackNavigator({
  SelectType: {screen: paramsToProps(SelectTypePage)},
  Product: {screen: paramsToProps(ProductPage)},
  Detail: {screen: paramsToProps(DetailPage)},
},
{
  headerMode: 'none',
})

const App = DrawerNavigator({
  Builder: {screen: BuilderStack},
  AIbuilder: {screen: paramsToProps(AIBuilderPage)},
  Favorite: {screen: paramsToProps(FavoritePage)},
  Setting: {screen: paramsToProps(SettingPage)}
},
{
  drawerWidth: 250,
  drawerPosition: 'left',
  initialRouteName: 'Builder',
  contentComponent: props => <DrawerComponent {...props}></DrawerComponent> 
});

export default App;
