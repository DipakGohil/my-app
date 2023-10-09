import { createSlice } from '@reduxjs/toolkit'


export const nameSlice = createSlice({
  name: 'name',
  initialState: {
    currentState: "",
  },
  reducers: {
    setNameState: (state,action) => {
      state.currentState = action.payload;
    },
  
  },
})

// Action creators are generated for each case reducer function
export const {setNameState } = nameSlice.actions

export default nameSlice.reducer