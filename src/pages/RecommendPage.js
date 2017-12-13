import React, { Component } from 'react';
import Theme from '../styles/Global';
import PageHeader from '../components/PageHeader';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class RecommendPage extends Component {

  constructor(props) {
    super(props);
    const {navigation} = this.props; // pass down navigation to PageHeader
    this.navigator = navigation;    
  }

  render() {
    
    return (
      <View style={{flex: 1}}>      
        <PageHeader headerText={"AI Builder"} navigation={this.navigator} type={"drawer"}></PageHeader>
        <View style={Style.container}>
          
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
  
});