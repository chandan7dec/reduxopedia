import { createSlice } from "@reduxjs/toolkit";
import { resetDestinationApp } from "./destinationSlice.js";
import { resetReduxOPedia } from "../action/action.js";

const initialState = {count:10};
export const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers: {
        //here we will define all actions
        increment: (state) => {
            state.count += 1;

        },

        decrement: (state) => {
            state.count -= 1;
        },
        decrementMultiplier: (state,action) => {
            state.count -= action.payload;
        },
        incrementMultiplier: (state,action) => {
            state.count += Number(action.payload);
        },
        // resetCouterApp: (state) => {
        //     state.count=10;
        // }
    },

    // extraReducers: (builder) => {
    //     builder.addCase(resetDestinationApp.toString(), (state,action) => {
    //         state.count =10;
    //     })
    // }

    extraReducers: (builder) => {
        builder.addCase(resetReduxOPedia, (state,action) => {
            state.count =10;
        })
    }
});

export const {increment, decrement, incrementMultiplier, decrementMultiplier} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;