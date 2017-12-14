import React, { Component } from 'react';
import Theme from '../../styles/Global';
import { NavigationActions } from 'react-navigation'
import PageHeader from '../../components/PageHeader';
import CpuDetail from '../../components/ProductDetail/CpuDetail';
import MainboardDetail from '../../components/ProductDetail/MainboardDetail';
import RamDetail from '../../components/ProductDetail/RamDetail';
import SsdDetail from '../../components/ProductDetail/SsdDetail';
import HarddiskDetail from '../../components/ProductDetail/HarddiskDetail';
import VgaDetail from '../../components/ProductDetail/VgaDetail';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class DetailPage extends Component {

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.navigator = navigation;
  }

  addToSpec() {
    const paramsAction = NavigationActions.setParams({
      params: {
        newProduct: this.props.product
      },
      key: 'SelectType',
    });
    this.navigator.dispatch(paramsAction);
  }

  renderProductDetail() {
    switch (this.props.product.productType) {
      case 'CPU': {
        return (
          <CpuDetail product={this.props.product}></CpuDetail>
        );
      } break;
      case 'VGA': {
        return (
          <VgaDetail product={this.props.product}></VgaDetail>
        );
      } break;
      case 'Mainboard': {
        return (
          <MainboardDetail product={this.props.product}></MainboardDetail>
        );
      } break;
      case 'RAM': {
        return (
          <RamDetail product={this.props.product}></RamDetail>
        );
      } break;
      case 'SSD': {
        return (
          <SsdDetail product={this.props.product}></SsdDetail>
        );
      } break;
      case 'Harddisk': {
        return (
          <HarddiskDetail product={this.props.product}></HarddiskDetail>
        );
      } break;
    }
  }

  renderAddButton() {
    if (this.props.showAddButton == false) {
      return;
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
          <TouchableOpacity style={local.addButton} onPress={this.addToSpec.bind(this)}>
            <Text style={local.addButtonText}>Add to spec</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PageHeader headerText={"Product"} navigation={this.navigator} type={"stack"}></PageHeader>
        <View style={[Style.container, { paddingBottom: 0 }]}>
          <ScrollView>

            <View style={Style.card}>
              <View style={local.productImageContainer}>
                <Image style={local.productImage}
                  source={{ uri: this.props.product.image }}></Image>
              </View>
              <View style={local.title}>
                <View style={{ marginBottom: 5 }}>
                  <Text style={local.titleText}>{this.props.product.name}</Text>
                </View>

                <View style={Style.colContent}>
                  <View style={{ flex: 1 }}>
                    <Text style={local.priceText}>
                      {this.props.product.price} Baht
                    </Text>
                  </View>

                  {this.renderAddButton()}

                </View>

              </View>
            </View>

            <View style={[Style.card, { marginBottom: 10 }]}>
              <View style={Style.colContent}>
                <View style={Style.indicator}></View>
                <View style={local.normalTitle}>
                  <Text style={local.normalTitleText}>Detail</Text>
                </View>
              </View>

              <View style={local.detailContainer}>
                {this.renderProductDetail()}
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
    padding: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  productImageContainer: {
    flex: 1,
    height: 250,
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  productImage: {
    alignSelf: 'center',
    height: 250,
    width: 250,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.secondary
  },
  normalTitle: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 5,
    backgroundColor: Color.primary,
    borderTopRightRadius: 2,
  },
  normalTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.primaryText,
  },
  addButton: {
    backgroundColor: Color.secondary,
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.primaryText
  },
  detailContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
  }
});