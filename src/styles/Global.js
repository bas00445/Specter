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
    headerLabel: {
        backgroundColor: Color.primary,
        padding: 10,
    },
    headerLabelText: {
        color: Color.primaryText,
        fontSize: 22,
        fontWeight: 'bold'
    },
    card: {
        padding: 10,
        margin: 10,
        borderRadius: 2,
        backgroundColor: Color.primaryWhite,
    },
});

var Theme = {Style, Color};

export default Theme;