import { getResponse } from "./API";
import { fetchWeather, fetchWeatherError, fetchWeatherSuccess } from "./weatherSlice";
import { call, delay, put, takeLatest } from "redux-saga/effects";

function* fetchWeatherHandler(action) {
    try {
        yield delay(500);
        const weather = yield call(getResponse, action.payload);
        yield put(fetchWeatherSuccess(weather));
    } catch (error) {
        yield put(fetchWeatherError(error));
        yield call(console.error);
    }
}

export function* weatherSaga() {
    yield takeLatest(fetchWeather.type, fetchWeatherHandler);
}