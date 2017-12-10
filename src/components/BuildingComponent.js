import React, { Component } from 'react';
import Theme from '../styles/Global';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
} from 'react-native';

var Style = Theme.Style;
var Color = Theme.Color;

export default class BuildingComponent extends Component {


    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={local.container}>
                    <View style={local.imageContainer}>
                        <Image style={{resizeMode: 'cover'}} source={require('../assets/images/ryzen3.png')}>
                        </Image>
                    </View>
                    <View style={local.detailContainer}>
                        <View>
                            <Text style={local.componentTitleText}>{this.props.type}</Text>
                        </View>
                        <View>
                            <Text style={local.detailText}>{this.props.name}</Text>
                        </View>
                        <View>
                            <Text style={local.detailText}>{this.props.price + " Baht"}</Text>
                        </View>
                        
                        
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

var local = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        flexDirection: 'row',
        margin: 10,
        borderWidth: 2,
        borderColor: Color.primary
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        backgroundColor: Color.secondaryLight,
        
    },
    detailContainer: {
        flex: 1,
        padding: 5,
        backgroundColor: Color.primaryLight,
    },
    componentTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.primaryText,
    },
    detailText: {
        fontSize: 16,
        color: Color.primaryText,        
    }
});