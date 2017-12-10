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

    constructor(props) {
        super(props);
        switch(this.props.type) {
            case 'CPU': {
                this.previewImg = require('../assets/images/ryzen3.png');
            } break;
            case 'RAM': {
                this.previewImg = require('../assets/images/corsair.jpg');
            } break;
            case 'VGA': {
                this.previewImg = require('../assets/images/1050.jpg');
            } break;
        }
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={local.container}>
                    <View style={local.imageContainer}>
                        <Image style={local.image} 
                            source={this.previewImg}>
                        </Image>
                    </View>
                    <View style={local.detailContainer}>
                        <View style={[Style.centerY, {flex: 2}]}>
                            <Text style={local.componentTitleText}>{this.props.type}</Text>
                        </View>
                        <View style={[Style.centerY, {flex: 1}]}>
                            <Text style={local.detailText}>{this.props.name}</Text>
                        </View>
                        <View style={[Style.centerY, {flex: 1}]}>
                            <Text style={local.priceText}>{this.props.price + " Baht"}</Text>
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
        height: 150,
        flexDirection: 'row',
        margin: 10,
        borderWidth: 2,
        borderColor: Color.primary
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
        width: 150, 
        height: 150, 
        resizeMode: 'contain'
    },
    detailContainer: {
        flex: 1,
        padding: 15,
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
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.secondary
    }
});