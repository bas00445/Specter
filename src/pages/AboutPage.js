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

export default class AboutPage extends Component {

  constructor(props) {
    super(props);
    const { navigation } = this.props; // pass down navigation to PageHeader
    this.navigator = navigation;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={"About"} navigation={this.navigator} type={"drawer"}></PageHeader>
        <View style={[Style.container, { paddingBottom: 0, padding: 20 }]}>
          <ScrollView>

            <View style={{marginBottom: 10}}>
              <Text style={local.titleText}>
                Description
              </Text>
              <Text style={local.detailText}>
                This project uses Prolog programming language on the server 
                side to evaluate cost of selecting PC's components
              </Text>
            </View>

            <View style={{marginBottom: 10}}>
              <Text style={local.titleText}>
                Members
              </Text>
              <Text style={local.detailText}>
                1. Phat Thaveepholcharoen (Front-end)
              </Text>
              <Text style={local.detailText}>
                2. Parin Kobboon (Back-end)
              </Text>
              <Text style={local.detailText}>
                3. Phum Vajanavinit (Back-end)
              </Text>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({
  titleText: {
    color: Color.primaryText,
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailText: {
    color: Color.primaryText,
    fontSize: 18,
  }
});