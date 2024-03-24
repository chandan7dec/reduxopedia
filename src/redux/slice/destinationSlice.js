import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/action.js";

const initialState = () => {
    return {
      destinations:  [
            {
                name: "Hond Kong",
                days: 7,
                fact: "World's longest covered escaltor",
            },
            {
                name: "Japan",
                days: 10,
                fact: "Japan is mostly mountians",
            },
            {
                name: "New Zealand",
                days: 14,
                fact: "Last country in the world to be inhabited by humans",
            },
        ],
        destinationSelected:null
    };
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState: initialState,
    reducers:{
        destinationClicked:(state,action) => {
            state.destinationSelected = action.payload;
            console.log(action);
        },
        resetDestinationApp: (state) => {
            state.destinationSelected = null;
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(resetReduxOPedia, (state,action) => {
            state.destinationSelected = null;
        })
    }
});


export const destinationReducer = destinationSlice.reducer;
export const {destinationClicked, resetDestinationApp} = destinationSlice.actions;