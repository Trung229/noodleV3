import { createSlice } from '@reduxjs/toolkit'

export const noodleModel = createSlice({
    name: 'noodle',
    initialState: {
      data:{},
      id:0,
      noodleAvailable:[]
    },
    reducers: {
      saveData: (state, action) => {
          return {
            ...state,
            data:{
               payload: action.payload,
            }
          }
      },
      saveID: (state,action)=>{
          return {
              ...state,
              id: action.payload,
          }
      },
      saveNoodle: (state, action)=>{
        return {
            ...state,
            noodleAvailable: action.payload,
        }
      }
    }
  })

export default noodleModel.reducer
  