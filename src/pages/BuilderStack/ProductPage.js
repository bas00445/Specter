import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import ProductFilter from '../../components/ProductFilter';
import ProductComponent from '../../components/ProductComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class ProductPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      products: [],
    }

    const { navigation } = this.props;
    this.navigator = navigation;
  }

  addToSpec(product) {
    const paramsAction = NavigationActions.setParams({
      params: {
        newProduct: product,
        productType: this.props.productType
      },
      key: 'SelectType',
    });
    this.navigator.dispatch(paramsAction);
  }

  async requestProducts() {
    try {
      this.setState({
        isLoading: true
      });

      let response = await fetch('http://52.221.73.154:1521/' + this.props.productType.toLowerCase());
      let responseJson = await response.json();

      for (let obj of responseJson) {
        obj['productType'] = this.props.productType;
      }

      this.setState({
        products: responseJson
      });

      this.setState({
        isLoading: false
      });

    } catch (error) {
      this.setState({
        isLoading: false
      });
    }
  }

  componentDidMount() {
    this.requestProducts();
  }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("Detail", { product: dataToPass });
  }

  renderProducts() {

    if (this.state.products.length > 0) {
      return (
        <FlatList
          data={this.state.products}
          renderItem={({ item }) =>
            <ProductComponent
              key={item.key}
              name={item.name}
              price={item.price}
              type={item.productType}
              image={item.image}
              onPress={this.navigateToDetail.bind(this, item)}
              onAddComponent={this.addToSpec.bind(this, item)}>
            </ProductComponent>}
        />
      );
    } else if (this.state.products.length == 0 && this.state.isLoading == false) {
      return (
        <View style={{
          flex: 1, justifyContent: 'center', alignItems: 'center',
          paddingVertical: 10, paddingHorizontal: 20
        }}>
          <View style={{ marginBottom: 5 }}>
            <Text style={local.detailText}>Network error. Please try again</Text>
          </View>
          <TouchableOpacity style={local.primaryButton} onPress={this.requestProducts.bind(this)}>
            <Text style={{ color: Color.primaryText, fontWeight: 'bold' }}>Try again</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={this.props.productType} navigation={this.navigator} type={"stack"}></PageHeader>
        <Spinner visible={this.state.isLoading} textContent={""} color={Color.secondary}>
        </Spinner>
        <View style={[Style.container, { paddingBottom: 0 }]}>
          <ScrollView>

            {/* <ProductFilter onSort={(type) => { this.sortProductBy(type) }}></ProductFilter> */}

            <View style={[Style.card, { marginBottom: 10 }]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={[Style.colContent]}>
                    <View style={Style.centerVertical}>
                      <Image style={local.titleIcon} source={require('../../assets/icons/listView.png')}></Image>
                    </View>
                    <View style={{ paddingLeft: 5 }}>
                      <Text style={local.titleText}>Products</Text>
                    </View>
                  </View>
                </View>
              </View>

              {this.renderProducts()}
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
  titleIcon: {
    width: 20,
    height: 20,
    tintColor: Color.secondary
  },
  primaryButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: Color.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  detailText: {
    color: Color.primaryText,
    fontSize: 16,
  }
});