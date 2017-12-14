import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay';
import Theme from '../../styles/Global';
import PageHeader from '../../components/PageHeader';
import ProductFilter from '../../components/ProductFilter';
import ProductComponent from '../../components/ProductComponent';
import RecommendComponent from '../../components/RecommendComponent';
import { cpus } from '../../mockupData/cpus';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  RefreshControl
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
      isLoading: false,
      recommends: [
        { imgUrl: 'http://', type: this.props.productType, price: 1500, name: "Corsair" },
        { imgUrl: 'http://', type: this.props.productType, price: 5999, name: "Asus GTX 1050Ti" },
        { imgUrl: 'http://', type: this.props.productType, price: 6000, name: "Ryzen 3 1200" },
      ],
      products: cpus,
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

  componentDidMount() {
    this.requestProducts();
  }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("Detail", { product: dataToPass, productType: this.props.productType });
  }

  requestProducts() {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {this.setState({
      isLoading: false
    })}, 2000);
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

  renderProducts() {
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            tintColor={Color.secondary} 
            colors={[Color.secondary]}/>
        }
        data={this.state.products}
        renderItem={({ item }) =>
          <ProductComponent
            key={item.key}
            name={item.name}
            price={item.price}
            type={this.props.productType}
            image={item.image}
            onPress={this.navigateToDetail.bind(this, item)}
            onAddComponent={this.addToSpec.bind(this, item)}>
          </ProductComponent>}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={this.props.productType} navigation={this.navigator} type={"stack"}></PageHeader>
        <View style={[Style.container, { paddingBottom: 0 }]}>
          <ScrollView>
            <View style={Style.card}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.title}>
                  <View style={[Style.colContent]}>
                    <View style={Style.centerVertical}>
                      <Image style={local.titleIcon} source={require('../../assets/icons/star.png')}></Image>
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