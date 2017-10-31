import React, { Component } from 'react';
import Theme from '../styles/Global';
import NativeButton from '../components/NativeButton';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class BuilderPage extends Component {
  static navigationOptions = {
    title: 'Builder',
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
              <Text style={Style.headerLabelText}>Builder</Text>
            </View>
          </View>
        </View>
        <View style={Style.container}>
          <ScrollView>
            <View style={{height: 200, backgroundColor: Color.pureWhite}}>
            
            </View>
            <View>
           
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});