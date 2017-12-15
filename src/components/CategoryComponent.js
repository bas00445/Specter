import React, { Component } from 'react';
import Theme from '../styles/Global';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class CategoryComponent extends Component {

    constructor(props) {
        super(props);

        switch(this.props.text) {
            case 'CPU': {
                this.compType = require("../assets/icons/components/cpu.png");
            } break;
            case 'GPU': {
                this.compType = require("../assets/icons/components/gpu.png");
            } break;
            case 'RAM': {
                this.compType = require("../assets/icons/components/memory.png");
            } break;
            case 'Mainboard': {
                this.compType = require("../assets/icons/components/mainboard.png");
            } break;
            case 'SSD': {
                this.compType = require("../assets/icons/components/harddisk.png");
            } break;
            case 'Harddisk': {
                this.compType = require("../assets/icons/components/harddisk.png");
            } break;
            case 'Power supply': {
                this.compType = require("../assets/icons/components/powersupply.png");
            } break;
            case 'Monitor': {
                this.compType = require("../assets/icons/components/monitor.png");
            } break;
        }
    }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[Style.colContent, {justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10}]}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <View style={[Style.colContent, {justifyContent: 'center', alignItems: 'center'}]}>
                <View >
                    <Image style={local.icon}
                        source={this.compType}>
                    </Image>
                </View>
                <Text style={Style.whiteText}>
                    {this.props.text}
                </Text>
            </View>
          </View>
          <View 
            style={{flex: 1, alignItems: 'flex-end'}}
            onPress={this.props.onPress}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Image style={local.icon}
                source={require("../assets/icons/play.png")}></Image>
            </View>
          </View>
        </View>
      </TouchableOpacity> 
    );
  }
} 

var local = StyleSheet.create({
    icon: {
        width: 25, 
        height: 25, 
        tintColor: Color.primaryText,
        marginRight: 5
    }
});