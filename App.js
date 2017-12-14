
import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

// Pages
import FavoritePage from './src/pages/FavoritePage';
import AboutPage from './src/pages/AboutPage';

// BuilderStack Pages
import SelectTypePage from './src/pages/BuilderStack/SelectTypePage';
import SpecPage from './src/pages/BuilderStack/SpecPage';
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
      const { navigation, ...otherProps } = this.props
      const { state: { params } } = navigation
      return <SomeComponent {...this.props} {...params} />
    }
  }
}

const BuilderStack = StackNavigator({
  SelectType: { screen: paramsToProps(SelectTypePage) },
  Spec: { screen: paramsToProps(SpecPage) },
  Product: { screen: paramsToProps(ProductPage) },
  Detail: { screen: paramsToProps(DetailPage) },
},
  {
    headerMode: 'none',
  });

const AIBuilderStack = StackNavigator({
  AISetup: { screen: paramsToProps(AISetupPage) },
  AISpec: { screen: paramsToProps(AISpecPage) },
  AIDetail: { screen: paramsToProps(AIDetailPage) },
},
  {
    headerMode: 'none',
  })

const App = DrawerNavigator({
  AIBuilder: { screen: AIBuilderStack },
  Builder: { screen: BuilderStack },
  About: { screen: paramsToProps(AboutPage) }
},
  {
    drawerWidth: 250,
    drawerPosition: 'left',
    initialRouteName: 'AIBuilder',
    contentComponent: props => <DrawerComponent {...props}></DrawerComponent>
  });

export default App;
