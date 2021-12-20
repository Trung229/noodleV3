import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { INFORMATION, NOODLE_AVAILABLE_1, NOODLE_AVAILABLE_2, NOODLE_AVAILABLE_3, NOODLE_IS_TAKEN, BUTTON } from '../../../src/utils/constant'
import styles from './styles'

const MyButton = (props) => {
    return (
            <TouchableOpacity onPress={() => {props.handleEvent()}}>
                <Image style={styles.buttonStyle} resizeMode="contain" style={{ width: 250, height: 140 }} source={BUTTON} />
                <Text style={styles.textButton}>{props.title}</Text>
            </TouchableOpacity>
    )
}

export default MyButton;