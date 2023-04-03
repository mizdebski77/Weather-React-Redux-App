import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "location",
    initialState: {
        cityName: "London",
    },
    reducers: {
        setLocation: (state, action) => {
            state.cityName = action.payload;
        },
    },
});

export const { setLocation } = searchSlice.actions;
export default searchSlice.reducer;
