import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    containerWelcome:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
    },
    imgBackground: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    content: {
        flex:3,
        display: 'flex',
        alignItems: 'center'
    }
})
export default styles;