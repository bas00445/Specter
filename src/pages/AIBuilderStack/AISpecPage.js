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
                type={this.props.spec[0].type} price={this.props.spec[0].price}
                name={this.props.spec[0].name}
                onPress={this.navigateToDetail.bind(this, this.props.spec[0])}>
              </AIProductComponent>

            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>VGA</Text>
                  </View>
                </View>
              </View>

              <AIProductComponent
                type={this.props.spec[1].type} price={this.props.spec[1].price}
                name={this.props.spec[1].name} 
                onPress={this.navigateToDetail.bind(this, this.props.spec[1])}>
              </AIProductComponent>


            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>RAM</Text>
                  </View>
                </View>
              </View>

              <AIProductComponent
                type={this.props.spec[2].type} price={this.props.spec[2].price}
                name={this.props.spec[2].name} 
                onPress={this.navigateToDetail.bind(this, this.props.spec[2])}>
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
                type={this.props.spec[3].type} price={this.props.spec[3].price}
                name={this.props.spec[3].name} 
                onPress={this.navigateToDetail.bind(this, this.props.spec[3])}>
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
                type={this.props.spec[4].type} price={this.props.spec[4].price}
                name={this.props.spec[4].name} 
                onPress={this.navigateToDetail.bind(this, this.props.spec[4])}>
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