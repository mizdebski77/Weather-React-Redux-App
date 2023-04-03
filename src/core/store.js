import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../common/Home/FetchWeather/weatherSlice'
import rootSaga from "./rootSaga";
import locationReducer from '../common/Home/Search/searchSlice'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        location: locationReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;