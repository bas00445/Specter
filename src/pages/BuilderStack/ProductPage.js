import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay';
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
  RefreshControl
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class ProductPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      recommends: [
        { image: 'https://www.jib.co.th/img_master/product/original/20170904085957_2.png', type: this.props.productType, price: 1500, name: "Corsair" },
        { image: 'https://www.jib.co.th/img_master/product/original/20170904085957_2.png', type: this.props.productType, price: 5999, name: "Asus GTX 1050Ti" },
        { image: 'https://www.jib.co.th/img_master/product/original/20170904085957_2.png', type: this.props.productType, price: 6000, name: "Ryzen 3 1200" },
      ],
      products: [],
    }

    const { navigation } = this.props;
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

  requestRecommends() {

  }

  async requestProducts() {
    try {
      this.setState({
        isLoading: true
      });

      let response = await fetch('http://52.221.73.154:1521/' + this.props.productType.toLowerCase());
      let responseJson = await response.json();

      this.setState({
        products: responseJson
      });

      this.setState({
        isLoading: false
      });

    } catch (error) {
      alert(error);

      this.setState({
        isLoading: false
      });
    }

    // this.setState({
    //   products: responseProducts
    // })
  }

  componentDidMount() {
    this.requestProducts();
    this.requestRecommends();
  }

  navigateToDetail(dataToPass) {
    this.navigator.navigate("Detail", { product: dataToPass, productType: this.props.productType });
  }

  renderRecommends() {
    let recommends = this.state.recommends;
    const views = [];
    for (let indx in recommends) {
      let obj = recommends[indx];
      views.push(
        <RecommendComponent type={obj.type} price={obj.price} product={obj} image={obj.image}
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
        <Spinner visible={this.state.isLoading} textContent={""} color={Color.secondary}>
        </Spinner>
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