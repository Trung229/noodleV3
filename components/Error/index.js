import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import Layout from '../../src/layout'
import { ERROR_DESCRIPTION, ERROR, ICON_ERROR, ERROR_BUTTON  } from '../../src/utils/constant'
import MyButton from '../Info/subComponents/myButton'
import styles from './styles'

const goBack = (navigation) =>{
    navigation.navigate('Welcome')
}

const ErrorScreen = ({navigation}) =>{
    return(
        <Layout title={ERROR}>
            <Image resizeMode="contain" source={ERROR_DESCRIPTION} style={{ width: 300, height: 50}}/>
            <TouchableOpacity onPress={() => goBack(navigation)}>
                <Image resizeMode="contain" source={ERROR_BUTTON} style={{ width: 150, height:50}}/>
            </TouchableOpacity>
            <Image resizeMode="contain" source={ICON_ERROR} style={{width: 200, height:150, marginTop:15}}/>
        </Layout>
    )
}
export default ErrorScreen;