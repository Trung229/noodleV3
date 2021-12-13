import React, { useEffect } from 'react';
import {
    Text,
    View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import { fetchAPI } from '../../src/services/noodle'

const Info = ({ route: { params: { id } } }) => {
    const noodle = useSelector((state) => state?.data?.payload)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'noodle/saveID',
            payload: id,
        })
        dispatch(fetchAPI)
        return () => {
            dispatch({
                type: 'noodle/saveID',
                payload: 0,
            })
        }
    }, [id])
    return (
        <View>
            {noodle &&
                <View>
                    <Text>{noodle.fullName}</Text>
                    <Text>{noodle.gender}</Text>
                    <Text>{moment.unix(noodle?.birthDay?.seconds).format('DD MMM YYYY')}</Text>
                </View>
            }
        </View>
    )
}
export default Info;