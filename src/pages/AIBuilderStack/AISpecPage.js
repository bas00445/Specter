import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import Modal from 'react-native-modal'
import AIProductComponent from '../../components/AI/AIProductComponent';
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
      products: [
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 1', price: 3000, key: '0' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 2', price: 2500, key: '1' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 3', price: 5555, key: '2' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 4', price: 7777, key: '3' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 5', price: 4444, key: '4' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 6', price: 2255, key: '5' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 7', price: 2500, key: '6' },
      ],
    }
    const { navigation } = this.props; // pass down navigation to PageHeader
    this.navigator = navigation;
  }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("AIDetail", { product: dataToPass });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={"Specification"} navigation={this.navigator} type={"stack"}></PageHeader>
        <View style={Style.container}>
          <ScrollView>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>CPU</Text>
                  </View>
                </View>
              </View>

              <AIProductComponent
                type={this.state.products[0].type} price={this.state.products[0].price}
                name={this.state.products[0].name} key={this.state.products[0].key}
                onPress={this.navigateToDetail.bind(this, this.state.products[0])}>
              </AIProductComponent>

            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>VGA card</Text>
                  </View>
                </View>
              </View>

              <AIProductComponent
                type={this.state.products[1].type} price={this.state.products[1].price}
                name={this.state.products[1].name} key={this.state.products[1].key}
                onPress={this.navigateToDetail.bind(this, this.state.products[1])}>
              </AIProductComponent>


            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>Memory</Text>
                  </View>
                </View>
              </View>

              <AIProductComponent
                type={this.state.products[2].type} price={this.state.products[2].price}
                name={this.state.products[2].name} key={this.state.products[2].key}
                onPress={this.navigateToDetail.bind(this, this.state.products[2])}>
              </AIProductComponent>

            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>Mainboard</Text>
                  </View>
                </View>
              </View>

              <AIProductComponent
                type={this.state.products[3].type} price={this.state.products[3].price}
                name={this.state.products[3].name} key={this.state.products[3].key}
                onPress={this.navigateToDetail.bind(this, this.state.products[3])}>
              </AIProductComponent>

            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>Storage</Text>
                  </View>
                </View>
              </View>

              <AIProductComponent
                type={this.state.products[4].type} price={this.state.products[4].price}
                name={this.state.products[4].name} key={this.state.products[4].key}
                onPress={this.navigateToDetail.bind(this, this.state.products[4])}>
              </AIProductComponent>

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
});