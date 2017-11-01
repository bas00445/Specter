import {StyleSheet} from 'react-native';

var Color = {
    pureWhite: '#ffffff',
    primary: '#212121',
    primaryLight: '#484848',
    primaryDark: '#000000',
    primaryWhite: '#f5f5f6',
    secondary: '#e64a19',
    secondaryLight: '#ff7d47',
    secondaryDark: '#ac0800',
    secondaryGrey: '#e1e2e1',
    primaryText: '#ffffff',
    secondaryText: '#fafafa',
  }

var Style = StyleSheet.create({
    container: {
        flex: 1, 
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
        padding: 10,
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