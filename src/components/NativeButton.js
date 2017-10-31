import React, { Component } from 'react';
import Theme from '../styles/Global';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class NativeButton extends Component {
  
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={{backgroundColor: this.props.color, justifyContent: 'center', padding: 10}}>
          <Text style={{color: Color.pureWhite, fontSize: 16}}>{this.props.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

var local = StyleSheet.create({
  
});