import {StyleSheet} from 'react-native';

var Color = {
    primary: '#212121',
    primaryDark: '#000000',
    primaryLight: '#303030',
    grey: '#424242',
    secondary: '#e84c3d',
    secondaryLight: '#ff7f69', 
    secondaryDark: '#af0b14',
    primaryText: '#e0e0e0',
    secondaryText: '#f5f5f5'
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
        tintColor: Color.secondary
    },
    drawerIcon: {
        width: 24,
        height: 24
    },
    card: {
        margin: 5,
        borderColor: Color.grey,
        borderRadius: 2,
        backgroundColor: Color.grey,
        shadowOpacity: 0.8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
    },
    whiteText: {
        color: Color.primaryText,
    },
    indicator: {
        width: 5,
        backgroundColor: Color.secondary,
        borderTopLeftRadius: 2
    }
});

var Theme = {Style, Color};

export default Theme;