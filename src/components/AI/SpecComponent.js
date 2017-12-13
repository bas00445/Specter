import React, { Component } from 'react';
import Theme from '../../styles/Global';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class SpecComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[Style.card, local.container]}>
          <View style={Style.colContent}>

            <View style={local.priorityContainer}>
              <Text style={local.priorityText}>
                {this.props.priority}
              </Text>
            </View>

            <View style={local.detailContainer}>
              <View style={Style.colContent}>
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 18, color: Color.primaryText}}>Score</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 18, color: Color.primaryText, fontWeight: 'bold'}}>5000</Text>
                </View>
              </View>
              <Text style={local.priceText}>{this.props.price + " Baht"}</Text>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

var local = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderColor: Color.primary
  },
  priorityContainer: {
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary
  },
  priorityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.primaryText
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    backgroundColor: Color.grey
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.secondary
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: Color.primaryText
  },
});