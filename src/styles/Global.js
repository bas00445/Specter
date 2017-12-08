import {StyleSheet} from 'react-native';

var Color = {
    pureWhite: '#ffffff',
    primary: '#f4511e',
    primaryLight: '#ff7d42',
    primaryDark: '#b91400',
    primaryWhite: '#f4f4f4',
    secondary: '#ff5722',
    secondaryLight: '#484848',
    secondaryDark: '#000000',
    secondaryGrey: '#e2e2e2',
    primaryText: '#ffffff',
    secondaryText: '#fafafa',
    darkText: '#212121',
  }

var Style = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 5,
        backgroundColor: Color.secondaryGrey
    },
    colContent: {
        flexDirection: 'row'
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: Color.primaryText
    },
    drawerIcon: {
        width: 24,
        height: 24
    },
    card: {
        margin: 5,
        borderColor: Color.primaryWhite,
        borderWidth: 2,
        borderRadius: 2,
        backgroundColor: Color.primaryWhite,
        shadowOpacity: 0.8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
});

var Theme = {Style, Color};

export default Theme;