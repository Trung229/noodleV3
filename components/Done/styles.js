import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        width: 250,
        height: 50
    },
    icon: {
        width: 35,
        height: 35,
        marginLeft: 16
    },
    textDescription: {
        fontWeight: '800',
        color: '#F8C135',
        fontSize: 20
    },
    containerBottom: {
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
        bottom:20
    },
    downArrow: {
        width: 50, 
        height: 50,
    }
})
export default styles;