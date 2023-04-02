import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        status: "loading",
        weather: [],
    },

    reducers: {
        fetchWeather: (state) => {
            state.status = "loading"
        },

        fetchWeatherSuccess: (state, { payload: weather }) => {
            state.status = "success";
            state.weather = weather;
        },

        fetchWeatherError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchWeather, fetchWeatherSuccess, fetchWeatherError } = weatherSlice.actions;
export const selectWeatherState = state => state.weather;

export const selectWeather = state => selectWeatherState(state).weather;
export const selectStatus = state => selectWeatherState(state).status;

export default weatherSlice.reducer;