import React, { Component } from 'react';
import Theme from '../styles/Global';
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

export default class BudgetComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            budgetValue: 5000
        };
    }

    render() {
        return (
            <View style={[Style.card, {marginBottom: 5}]}>
                <View style={Style.colContent}>
                    <View style={local.title}>
                        <Text style={local.titleText}>{this.props.compType}</Text>
                    </View>
                </View>

                <View style={{paddingVertical: 10}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={local.budgetVal}>{this.state.budgetValue}</Text></View>
                    <Slider minimumValue={0} maximumValue={40000} step={500} value={5000}
                        thumbTintColor={Color.secondary} maximumTrackTintColor={Color.secondaryLight}
                        minimumTrackTintColor={Color.secondaryLight}
                        onValueChange={(value) => this.setState({budgetValue: value})}></Slider>
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
    budgetVal: {
        color: Color.primaryText,
        fontSize: 16,
    },
    title: {
        flex: 1,
        paddingLeft: 10,
        paddingVertical: 2,
        backgroundColor: Color.primary,
        borderTopRightRadius: 2,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.primaryText,
    },
});