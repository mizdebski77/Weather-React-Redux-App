import axios from "axios";

const location = "Warsaw"
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2d69c33ffd75da46682b9c8cc079fd6d`;

export const getResponse = async () => {
    const response = await axios(URL);
    return await response.data;
};


