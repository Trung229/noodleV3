import React, { useState, useEffect } from 'react';
import {
    Text,
    View
} from 'react-native';
import { db } from '../../DB_config/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore/lite';
import moment from 'moment';

const Info = ({ route: { params: { id } } }) => {
    const [data, setData] = useState({});
    const GetData = async (userID) => {
        const docRef = doc(db, 'users', userID)
        const citySnapshot = await getDoc(docRef);
        setData(citySnapshot.data())
    }
    useEffect(() => {
        GetData(id)
        return () => { setData("") }
    }, [id])
    console.log("data : ",data)
    console.log("==>", data?.birthDay?.seconds)
    return (
        <View>
            {data && 
            <View>
                <Text>{data.fullName}</Text>
                <Text>{data.gender}</Text>
                <Text>{moment.unix(data?.birthDay?.seconds).format('DD MMM YYYY')}</Text>
            </View>
            }
        </View>
    )
}
export default Info;