
import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

// Pages
import FavoritePage from './src/pages/FavoritePage';
import SettingPage from './src/pages/SettingPage';

// BuilderStack Pages
import SelectTypePage from './src/pages/BuilderStack/SelectTypePage';
import ProductPage from './src/pages/BuilderStack/ProductPage';
import DetailPage from './src/pages/BuilderStack/DetailPage';

// AIBuilderStack Pages
import AISetupPage from './src/pages/AIBuilderStack/AISetupPage';
import AISpecPage from './src/pages/AIBuilderStack/AISpecPage';
import AIDetailPage from './src/pages/AIBuilderStack/AIDetailPage';

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
});

const AIBuilderStack = StackNavigator({
  AISetup: {screen: paramsToProps(AISetupPage)},
  AISpec: {screen: paramsToProps(AISpecPage)},
  AIDetail: {screen: paramsToProps(AIDetailPage)},
},
{
  headerMode: 'none',
})

const App = DrawerNavigator({
  Builder: {screen: BuilderStack},
  AIBuilder: {screen: AIBuilderStack},
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
