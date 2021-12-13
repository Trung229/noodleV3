import { db } from '../../DB_config/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore/lite';

export const fetchAPI = async (dispatch, getState) => {
    const payload = getState();
    const docRef = doc(db, 'users', payload.id)
    const noodleSnapshot = await getDoc(docRef);
    dispatch({
        type: 'noodle/saveData',
        payload:noodleSnapshot.data(),
    })
}