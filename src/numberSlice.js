import { createSlice } from '@reduxjs/toolkit'


export const numberSlice = createSlice({
  name: 'number',
  initialState: {
    currentState: "",
  },
  reducers: {
    setNumberState: (state,action) => {
      state.currentState = action.payload;
    },
  
  },
})

// Action creators are generated for each case reducer function
export const {setNumberState } = numberSlice.actions

export default numberSlice.reducer