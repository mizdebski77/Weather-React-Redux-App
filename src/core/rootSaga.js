import { all } from "redux-saga/effects";
import { weatherSaga } from '../common/Home/FetchWeather/weatherSaga';

export default function* rootSaga() {
    yield all([
        weatherSaga(),
    ]);
};
