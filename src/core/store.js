import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../common/Home/FetchWeather/weatherSlice'
import rootSaga from "./rootSaga";
import searchReducer from '../common/Home/Search/searchSlice'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        search: searchReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
