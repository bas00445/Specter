import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import Modal from 'react-native-modal'
import ProductComponent from '../../components/ProductComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class AISpecPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    const { navigation } = this.props; // pass down navigation to PageHeader
    this.navigator = navigation;
  }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("Detail", { product: dataToPass });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={"Spec Detail"} navigation={this.navigator} type={"stack"}></PageHeader>
        <View style={Style.container}>
          <ScrollView>

          </ScrollView>
        </View>
      </View>
    );
  }
}

var local = StyleSheet.create({

});