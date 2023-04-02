import { getResponse } from "./API";
import { fetchWeather, fetchWeatherError, fetchWeatherSuccess } from "./weatherSlice";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchWeatherHandler() {
    try {
        const weather = yield call(getResponse);
        yield put(fetchWeatherSuccess(weather));
    } catch (error) {
        yield put(fetchWeatherError(error));
        yield call(console.error);
    }
}

export function* weatherSaga() {
    yield takeLatest(fetchWeather.type, fetchWeatherHandler);
}