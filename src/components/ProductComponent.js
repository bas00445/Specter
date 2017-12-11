import React, { Component } from 'react';
import Theme from '../styles/Global';
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

export default class ProductComponent extends Component {

    constructor(props) {
        super(props);
        switch(this.props.name) {
            case 'Ryzen 3 1200': {
                this.previewImg = require('../assets/images/ryzen3.png');
            } break;
            case 'Corsair': {
                this.previewImg = require('../assets/images/corsair.jpg');
            } break;
            case 'Asus GTX 1050Ti': {
                this.previewImg = require('../assets/images/1050.jpg');
            } break;
        }
    }

    render() {
        return (
            <View style={local.container}>
                <View style={local.imageContainer}>
                    <Image style={local.image} 
                        source={this.previewImg}>
                    </Image>
                </View>
                <TouchableOpacity onPress={this.props.onPress} style={local.detailContainer}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={local.detailText}>{this.props.name}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={local.priceText}>{this.props.price + " Baht"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

var local = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
        margin: 5,
        borderRadius: 2,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        backgroundColor: '#ffffff',
    },
    image: {
        flex: 1, 
        alignSelf: 'center', 
        width: 100, 
        height: 100, 
        resizeMode: 'contain'
    },
    detailContainer: {
        flex: 2,
        paddingTop: 2,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: Color.grey,
    },
    componentTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.primaryText,
    },
    detailText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.primaryText,        
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