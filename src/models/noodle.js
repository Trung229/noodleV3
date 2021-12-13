import { createSlice } from '@reduxjs/toolkit'

export const noodleModel = createSlice({
    name: 'noodle',
    initialState: {
      data:{},
      id:0,
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
      }
    }
  })

export default noodleModel.reducer
  