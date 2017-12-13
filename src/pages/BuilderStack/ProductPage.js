import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import ProductFilter from '../../components/ProductFilter';
import ProductComponent from '../../components/ProductComponent';
import RecommendComponent from '../../components/RecommendComponent';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class ProductPage extends Component {
  static navigationOptions = {
    title: 'Product',
  };

  constructor(props) {
    super(props);
    this.state = {
      startRenderProducts: false,
      recommends: [
        { imgUrl: 'http://', type: "RAM", price: 1500, name: "Corsair" },
        { imgUrl: 'http://', type: "VGA", price: 5999, name: "Asus GTX 1050Ti" },
        { imgUrl: 'http://', type: "CPU", price: 6000, name: "Ryzen 3 1200" },
      ],
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

  addToSpec(product) {
    const paramsAction = NavigationActions.setParams({
      params: {
        newProduct: product
      },
      key: 'SelectType',
    });
    this.navigator.dispatch(paramsAction);
  }

  renderProducts() {
    return (
      <FlatList
        data={this.state.products}
        renderItem={({ item }) =>
          <ProductComponent
            key={item.key}
            name={item.name}
            price={item.price}
            onPress={this.navigateToDetail.bind(this, item)}
            onAddComponent={this.addToSpec.bind(this, item)}>
          </ProductComponent>}
      />
    );
  }

  // sortProductBy(type) {
  //   if (type == 'sortName') {
  //     this.state.products.sort(function (a, b) {
  //       return (a.name - b.name);
  //     });
  //   } else if (type == 'sortPrice') {
  //     this.state.products.sort(function (a, b) {
  //       return (a.price - b.price);
  //     });
  //   }
  // }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("Detail", { product: dataToPass });
  }

  requestProducts() {
    alert('Request products');
  }

  renderRecommends() {
    let recommends = this.state.recommends;
    const views = [];
    for (let indx in recommends) {
      let obj = recommends[indx];
      views.push(
        <RecommendComponent type={obj.type} price={obj.price}
          name={obj.name} key={indx} onPress={this.navigateToDetail.bind(this, obj)}
          onAddComponent={this.addToSpec.bind(this, obj)}>
        </RecommendComponent>
      );
    }
    return views;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={this.props.data} navigation={this.navigator} type={"stack"}></PageHeader>
        <View style={[Style.container, { paddingBottom: 0 }]}>
          <ScrollView>
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

              <View style={{ padding: 5, height: 150 }}>
                <ScrollView horizontal={true}>
                  {this.renderRecommends()}
                </ScrollView>
              </View>
            </View>

            {/* <ProductFilter onSort={(type) => { this.sortProductBy(type) }}></ProductFilter> */}

            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <Text style={[local.titleText, {paddingLeft: 6}]}>Products</Text>
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
  starIcon: {
    width: 20,
    height: 20,
    tintColor: Color.secondary
  },
  addButton: {
    backgroundColor: Color.secondary,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.primaryText
  }
});