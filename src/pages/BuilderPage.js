import React, { Component } from 'react';
import Theme from '../styles/Global';
import NativeButton from '../components/NativeButton';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

class TypeComponent extends Component {
  
  render() {
    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={[Style.card, Style.colContent, {justifyContent: 'center'}]}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text style={{fontSize: 18}}>
              {this.props.text}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{fontSize: 18}}>
              >
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback> 
    );
  }
} 

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
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
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
              <TypeComponent text={"CPU"}></TypeComponent>
              <TypeComponent text={"Graphic card"}></TypeComponent>
              <TypeComponent text={"Memory"}></TypeComponent>
              <TypeComponent text={"Mainboard"}></TypeComponent>
              <TypeComponent text={"Storage"}></TypeComponent>
              <TypeComponent text={"Power supply"}></TypeComponent>
              <TypeComponent text={"Monitor"}></TypeComponent>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  
});