import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
		name: "",
	};

const filtrsSlice = createSlice({
    name: 'filter',
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const filterReducer = filtrsSlice.reducer;
export const {changeFilter} = filtrsSlice.actions;
export const selectNameFilter = ({filter}) => filter.name;