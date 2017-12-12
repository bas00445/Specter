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

    render() {
        return (
            <View style={[Style.card]}>
                <View style={Style.colContent}>
                    <View style={Style.indicator}></View>
                    <View style={[local.title, {justifyContent: 'center'}]}>
                        <Text style={local.titleText}>Filter</Text>
                    </View>
                </View>

                <View style={{paddingHorizontal: 10, paddingVertical: 2}}>
                    <View style={Style.colContent}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={local.titleText}>Sort by</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Picker mode={"dropdown"} style={{color: Color.primaryText}}
                                selectedValue={this.state.sortingType}
                                onValueChange={(itemValue, itemIndex) => this.setState({sortingType: itemValue})}>
                                <Picker.Item label="Price" value="sortPrice" />
                                <Picker.Item label="Name" value="sortName" />
                            </Picker>
                        </View>
                    </View>

                    {/* <View style={Style.colContent}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={local.titleText}>Limit (Baht)</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={local.budgetVal}>{this.state.productVal}</Text>
                            </View>
                            <Slider minimumValue={0} maximumValue={40000} step={500} value={this.state.productVal}
                                thumbTintColor={Color.secondary} maximumTrackTintColor={Color.secondaryLight}
                                minimumTrackTintColor={Color.secondaryLight}
                                onValueChange={(value) => {this.setState({productVal:value})}}>
                            </Slider>
                        </View>
                    </View> */}
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
        borderWidth: 2,
        borderColor: Color.primary
    },
    title: {
        flex: 1,
        paddingLeft: 10,
        paddingVertical: 10,
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
});