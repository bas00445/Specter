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

export default class AISetupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tempBudget: '',
      budget: 20000,
      showBudgetModal: false,
      recommends: [
        { imgUrl: 'http://', type: "RAM", price: 1500, name: "Corsair" },
        { imgUrl: 'http://', type: "VGA", price: 5999, name: "Asus GTX 1050Ti" },
        { imgUrl: 'http://', type: "CPU", price: 6000, name: "Ryzen 3 1200" },
      ]
    }
    const { navigation } = this.props; // pass down navigation to PageHeader
    this.navigator = navigation;
    this.navigator.state.key = 'AIBuilder'; // Set a key to this page to receive params
  }

  setTempBudget(value) {
    this.setState({
      tempBudget: value
    });
  }

  setBudget() {
    this.setState({
      budget: this.state.tempBudget
    });
    this.setState({
      showBudgetModal: false,
    })
  }

  requestSpec() {
    alert('Request spec');
  }

  renderProducts() {
    return (<FlatList
      data={[
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 5 1200 Premium Edition Extreme Ryzen 5 1200 Premium Edition Extreme', price: 3000, key: '0' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 4 5900', price: 2500, key: '1' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 3 5200', price: 5555, key: '2' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 9 x999', price: 7777, key: '3' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 10 3350', price: 4444, key: '4' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen X 1000', price: 2255, key: '5' },
        { imgUrl: 'http://', type: 'CPU', name: 'Ryzen 4 5900', price: 2500, key: '6' },
      ]}
      renderItem={({ item }) =>
        <ProductComponent
          key={item.key}
          name={item.name}
          price={item.price}>
        </ProductComponent>}
    />);
  }

  renderBudgetModal() {
    return (
      <Modal
        animationIn="slideInUp"
        isVisible={this.state.showBudgetModal}
        onBackButtonPress={() => { this.setState({ showBudgetModal: false }) }}
        onBackdropPress={() => { this.setState({ showBudgetModal: false }) }}>

        <View style={local.modalContainer}>
          <View style={Style.colContent}>
            <View style={local.budgetTitle}>
              <Text style={local.titleText}>Set your budget</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => { this.setState({ showBudgetModal: false }) }}>
                <Image style={local.icon} source={require("../../assets/icons/close.png")}>
                </Image>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput placeholder={"Input here"}
            underlineColorAndroid={Color.secondary} selectionColor={Color.secondaryLight}
            placeholderTextColor={'#cccccc'} style={{ color: Color.primaryText }}
            onChangeText={(value) => { this.setTempBudget(value) }}></TextInput>

          <View style={{ alignItems: 'flex-end', paddingHorizontal: 5, marginTop: 10 }}>
            <TouchableOpacity style={local.primaryButton} onPress={this.setBudget.bind(this)}>
              <Text style={{ color: Color.primaryText, fontWeight: 'bold' }}>OK</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={"AI Builder"} navigation={this.navigator} type={"drawer"}></PageHeader>
        {this.renderBudgetModal()}
        <View style={Style.container}>
          <ScrollView>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>Setup</Text>
                  </View>
                </View>
              </View>

              <View style={{ padding: 5 }}>
                <View style={[Style.colContent, { paddingHorizontal: 10, paddingVertical: 5}]}>
                  <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={[Style.whiteText, {fontSize: 16}]}>Budget (Baht)</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{marginBottom: 5}} onPress={() => { this.setState({ showBudgetModal: true }) }}>
                      <View style={Style.colContent}>
                        <Text style={Style.whiteText}>{this.state.budget}</Text>
                        <Image style={local.editIcon}
                          source={require('../../assets/icons/edit.png')}></Image>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={local.primaryButton} onPress={this.requestSpec.bind(this)}>
                      <Text style={{ color: Color.primaryText, fontWeight: 'bold' }}>Generate</Text>
                    </TouchableOpacity>

                  </View>
                </View>


              </View>
            </View>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={[Style.colContent]}>
                    <View style={Style.centerVertical}>
                      <Image style={local.starIcon} source={require('../../assets/icons/star.png')}></Image>
                    </View>
                    <View style={{ paddingLeft: 5 }}>
                      <Text style={local.titleText}>Recommend</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {this.renderProducts()}

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
  editIcon: {
    width: 20,
    height: 20,
    tintColor: Color.primaryText,
    marginLeft: 10
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Color.primaryText
  },
  budgetTitle: {
    flex: 3,
    backgroundColor: Color.primary,
    borderRadius: 2,
    paddingHorizontal: 5
  },
  primaryButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Color.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  modalContainer: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 2
  }
});