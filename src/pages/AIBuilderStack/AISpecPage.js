import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import Modal from 'react-native-modal'
import ProductComponent from '../../components/AI/ProductComponent';
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
    // this.navigator.navigate("Detail", { product: dataToPass });
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

              <ProductComponent
                type={'CPU'} price={5000}
                name={'Ryzen 3 1200'} key={5}
                onPress={this.navigateToDetail.bind(this, '')}>
              </ProductComponent>

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

              <ProductComponent
                type={'VGA'} price={5000}
                name={'ASUS GTX 1050 Ti'} key={6}
                onPress={this.navigateToDetail.bind(this, '')}>
              </ProductComponent>


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

              <ProductComponent
                type={'RAM'} price={5000}
                name={'Corsair 4 GB'} key={2}
                onPress={this.navigateToDetail.bind(this, '')}>
              </ProductComponent>

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

              <ProductComponent
                type={'Mainboard'} price={5000}
                name={'ASUS ROG RX7'} key={3}
                onPress={this.navigateToDetail.bind(this, '')}>
              </ProductComponent>

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

              <ProductComponent
                type={'Storage'} price={5000}
                name={'Samsung SSD 128 GB'} key={4}
                onPress={this.navigateToDetail.bind(this, '')}>
              </ProductComponent>

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