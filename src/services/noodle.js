import { db } from '../../DB_config/firebaseConfig'
import { getDoc, doc, updateDoc } from 'firebase/firestore/lite';

export const fetchAPI = async (dispatch, getState) => {
    const payload = getState();
    try{
        console.log(payload.id);
        const docRef =doc(db, 'users', payload.id)
        console.log(docRef)
        const noodleSnapshot = await getDoc(docRef);
        console.log(noodleSnapshot)
        dispatch({
            type: 'noodle/saveData',
            payload:noodleSnapshot.data(),
        })
    }catch(err){
        console.log(err)
    }
}

export const updateNoodle = async (dispatch, getState) => {
    const payload = getState();
    if(payload.noodleAvailable){
        const docRef = doc(db, 'users', payload.id)
        await updateDoc(docRef, {
            noodleAvailable:  payload.noodleAvailable
          });
    }
}