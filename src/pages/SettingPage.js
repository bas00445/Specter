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

export default class SettingPage extends Component {
  // static navigationOptions = {
  //   title: 'Setting',
  // };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props; // pass down navigation to PageHeader
    
    return (
      <View style={{flex: 1}}>      
        <PageHeader headerText={"Setting"} navigation={navigation} type={"drawer"}></PageHeader>
        <View style={Style.container}>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});