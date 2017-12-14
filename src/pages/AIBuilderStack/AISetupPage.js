import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import Modal from 'react-native-modal'
import SpecComponent from '../../components/AI/SpecComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  AsyncStorage,
  RefreshControl,
  ToastAndroid
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
      specs: [],
      specViews: null,
      isLoading: false,
    }

    const { navigation } = this.props; // pass down navigation to PageHeader
    this.navigator = navigation;
  }

  componentDidMount() {
    this.initSpecViews();
    this.requestSpecs();
  }

  initSpecViews() {
    let view = (
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Text style={{ fontSize: 16, color: Color.primaryText }}>
          Empty
          </Text>
      </View>
    );

    this.setState({
      specViews: view
    });
  }

  setTempBudget(value) {
    this.setState({
      tempBudget: value,
    });
  }

  setBudget() {
    if (isNaN(this.state.tempBudget)) {
      alert('Input must be any number');
      this.setState({
        tempBudget: '',
      });
      return;
    }

    this.setState({
      budget: this.state.tempBudget
    });
    this.setState({
      showBudgetModal: false,
    })
  }

  async requestSpecs() {
    try {
      this.setState({
        isLoading: true,
      });

      var response = await fetch('http://52.221.73.154:1521/price/' + this.state.budget);
      var responseJson = await response.json();

      let specs = responseJson;

      let views = [];
      for (let indx = 0; indx < specs.length; indx++) {
        let obj = specs[indx];
        let order = indx + 1;
        // console.log(obj[length - 2].total_score);
        views.push(
          <SpecComponent
            key={indx}
            priority={order}
            point={obj[obj.length - 2].total_score}
            price={obj[obj.length - 1].total_price}
            onPress={this.navigateToSpec.bind(this, obj)}>
          </SpecComponent>
        );
      }

      this.setState({
        specViews: views
      });

      this.setState({
        isLoading: false,
      });

    } catch (error) {
      alert(error);
      this.setState({
        isLoading: false,
      });
    }

  }

  navigateToSpec(dataToPass) {
    this.navigator.navigate('AISpec', { spec: dataToPass });
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
        <Spinner visible={this.state.isLoading} textContent={""} color={Color.secondary}>
        </Spinner>
        {this.renderBudgetModal()}
        <View style={Style.container}>
          <ScrollView>

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={local.titleText}>Preference</Text>
                  </View>
                </View>
              </View>

              <View style={{ padding: 5 }}>
                <View style={[Style.colContent, {
                  paddingHorizontal: 10, paddingVertical: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: Color.primaryLight
                }]}>
                  <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text style={[Style.whiteText, { fontSize: 16 }]}>Budget (Baht)</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => { this.setState({ showBudgetModal: true }) }}>
                      <View style={Style.colContent}>
                        <Text style={Style.whiteText}>{this.state.budget}</Text>
                        <Image style={local.editIcon}
                          source={require('../../assets/icons/edit.png')}></Image>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ alignItems: 'flex-end', padding: 5, paddingTop: 10 }}>
                  <TouchableOpacity style={local.primaryButton} onPress={this.requestSpecs.bind(this)}>
                    <Text style={{ color: Color.primaryText, fontWeight: 'bold' }}>Generate</Text>
                  </TouchableOpacity>
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
                      <Text style={local.titleText}>Recommend Specs</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ padding: 5 }}>
                {this.state.specViews}
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