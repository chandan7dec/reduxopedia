import {configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './slice/counterSlice';

export const store = configureStore({
    reducer: {
        //we will fill this reducer here.
        counterStore: counterReducer
    },
});

// console.log(store.getState());
// store.dispatch({
//     type:"counter/increment",
// });

// console.log(store.getState());