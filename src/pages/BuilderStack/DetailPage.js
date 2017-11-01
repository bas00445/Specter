import React, { Component } from 'react';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class DetailPage extends Component {
  static navigationOptions = {
    title: 'Product Detail',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props; // pass down navigation to PageHeader
    
    return (
      <View style={{flex: 1, backgroundColor: Color.whiteGrey1}}>      
        <PageHeader headerText={"Product Detail"} navigation={navigation} type={"stack"}></PageHeader>
        <View style={Style.container}>
          
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});