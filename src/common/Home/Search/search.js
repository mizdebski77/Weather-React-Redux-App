import { Wrapper, Location, Button, Image } from './styledSearch';
import search from '../../Images/search.svg'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchWeather } from "../FetchWeather/weatherSlice";
import { useEffect } from 'react';

export const Search = () => {
    const [location, setLocation] = useState("");
    const dispatch = useDispatch();


    const searchLocation = (event) => {
        event.preventDefault();
        dispatch(fetchWeather(location));

        localStorage.setItem("cityName", location);
    };




    return (
        <Wrapper>
            <Location
                value={location}
                onChange={({ target }) => setLocation(target.value)}
                placeholder='Enter The City or Country ' />
            <Button onClick={searchLocation}> <Image src={search} /> Search city </Button>
        </Wrapper>
    );
};
