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
  static navigationOptions = {
    title: 'Recommend',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props; // pass down navigation to PageHeader
    
    return (
      <View style={{flex: 1, backgroundColor: Color.whiteGrey1}}>      
        <PageHeader headerText={"Recommend"} navigation={navigation} type={"drawer"}></PageHeader>
        <View style={Style.container}>
          
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
  
});