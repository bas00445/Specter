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

export default class CustomSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            budgetValue: this.props.budgetValue
        };
    }

    updateBudget(value) {
        this.setState({budgetValue:value});
        this.props.onUpdateBudget(value);
    }

    render() {
        return (
            <View style={{paddingTop: 10}}>
                <Slider minimumValue={0} maximumValue={200000} step={1000} value={this.state.budgetValue}
                    thumbTintColor={Color.secondary} maximumTrackTintColor={Color.secondaryLight}
                    minimumTrackTintColor={Color.secondaryLight}
                    onValueChange={(value) => {this.updateBudget(value)}}>
                </Slider>
                <View style={local.budget}>
                    <Text style={local.budgetVal}>{this.state.budgetValue} Baht</Text>
                </View>
            </View>
        );
    }
}


var local = StyleSheet.create({
    budget: {
        justifyContent: 'center',
        paddingLeft: 15
    },
    budgetVal: {
        color: Color.primaryText,
        fontSize: 14,
    },
});