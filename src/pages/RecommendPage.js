import React, { Component } from 'react';
import Theme from '../styles/Global';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
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
    return (
      <View style={{flex: 1, backgroundColor: Color.whiteGrey1}}>      
        <View style={Style.headerLabel}>
          <View style={Style.colContent}>
            <View style={{marginRight: 10, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Image style={Style.icon}
                  source={require('../assets/icons/hamburger.png')}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={Style.headerLabelText}>Recommend</Text>
            </View>
          </View>
        </View>
        <View style={Style.container}>
          
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
  
});