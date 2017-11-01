import React, { Component } from 'react';
import Theme from '../../styles/Global';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class DetailPage extends Component {
  static navigationOptions = {
    title: 'Detail',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Color.whiteGrey1}}>      
        
        <View style={Style.container}>
          
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});