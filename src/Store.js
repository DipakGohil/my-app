import { configureStore } from '@reduxjs/toolkit';
import nameReduser from './nameSlice';
import numberReduser from './numberSlice';

 export const store = configureStore({
  reducer: {
    name : nameReduser,
    number: numberReduser,
  },
})

//export default store;