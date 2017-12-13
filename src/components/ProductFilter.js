import React, { Component } from 'react';
import Theme from '../styles/Global';
import { Picker } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    Slider
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class ProductFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePrice: true,
            activeName: false,
            productVal: 10000,
            sortingType: 'sortPrice'
        };
    }

    updateSortingType(type) {
      this.setState({sortingType: type});
      // this.props.onSort(type);
    }

    render() {
        return (
            <View style={[Style.card]}>
                {/* <View style={Style.colContent}>
                    <View style={Style.indicator}></View>
                    <View style={[local.title, {justifyContent: 'center'}]}>
                        <Text style={local.titleText}>Filter</Text>
                    </View>
                </View> */}

                <View style={{paddingHorizontal: 10}}>
                    <View style={Style.colContent}>
                        <View style={Style.centerVertical}>
                            <Image style={local.icon} source={require('../assets/icons/sort.png')}></Image>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={local.sortByText}>Sort by</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Picker mode={"dropdown"} style={{color: Color.primaryText}}
                                selectedValue={this.state.sortingType}
                                onValueChange={(itemValue, itemIndex) => {this.updateSortingType(itemValue)}}>
                                <Picker.Item label="Price" value="sortPrice" />
                                <Picker.Item label="Name" value="sortName" />
                            </Picker>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


var local = StyleSheet.create({
    container: {
        width: 300,
        flexDirection: 'row',
        margin: 10,
    },
    title: {
        flex: 1,
        paddingLeft: 10,
        paddingVertical: 5,
        backgroundColor: Color.primary,
        borderTopRightRadius: 2,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.primaryText,
    },
    budgetVal: {
        color: Color.primaryText,
        fontSize: 16,
    },
    sortByText: {
        color: Color.primaryText,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: Color.primaryText,
        marginRight: 5,
    }
});