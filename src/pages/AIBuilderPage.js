import React, { Component } from 'react';
import Theme from '../styles/Global';
import PageHeader from '../components/PageHeader';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class AIBuilderPage extends Component {

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
          <ScrollView>
              
            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={[Style.colContent]}>
                    <View style={Style.centerVertical}>
                      <Image style={local.starIcon} source={require('../assets/icons/star.png')}></Image>
                    </View>
                    <View style={{paddingLeft: 5}}>
                      <Text style={local.titleText}>Recommend</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  title: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 5,
    backgroundColor: Color.primary,
    borderTopRightRadius: 2,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  starIcon: {
    width: 20,
    height: 20,
    tintColor: Color.secondary
  },
  
});