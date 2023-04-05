import axios from "axios";

const API_KEY = '00046eb59b4c4445bba180800230404';
const URL = 'http://api.weatherapi.com/v1/forecast.json';

export const getResponse = async (cityName) => {
    const response = await axios.get(URL, {
        params: {
            q: cityName != null ? cityName : "London",
            key: API_KEY,
            days: 5,
            aqi: 'no',
            alerts: 'no'
        }
    });
    return response.data;
};