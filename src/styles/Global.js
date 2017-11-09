import {StyleSheet} from 'react-native';

var Color = {
    pureWhite: '#ffffff',
    primary: '#ff5722',
    primaryLight: '#ff8a50',
    primaryDark: '#c41c00',
    primaryWhite: '#f5f5f6',
    secondary: '#212121',
    secondaryLight: '#484848',
    secondaryDark: '#000000',
    secondaryGrey: '#e1e2e1',
    primaryText: '#ffffff',
    secondaryText: '#fafafa',
  }

var Style = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 5,
        backgroundColor: Color.primaryLight
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