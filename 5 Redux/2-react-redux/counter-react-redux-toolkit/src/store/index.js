import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import privacySlice from './privacy';

const counterStore = configureStore({reducer : {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer  // Include privacy slice in the store's reducer state
}});



export default counterStore