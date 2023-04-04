import axios from "axios";

const API_KEY = '2d69c33ffd75da46682b9c8cc079fd6d';
const URL = `https://api.openweathermap.org/data/2.5/weather`;

export const getResponse = async (cityName) => {
    const response = await axios.get(URL, {
        params: {
            q: cityName != null ? cityName : "Warsaw",
            appid: API_KEY
          }
    });
    return response.data;
};
