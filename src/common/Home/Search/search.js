import { Wrapper, Location, Button, Image } from './styledSearch';
import search from '../../Images/search.svg'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Search = () => {
    const [location, setLocation] = useState("");
    const dispatch = useDispatch();

    const searchLocation = (event) => {
        event.preventDefault();
        dispatch(setLocation(location));
    }

    const cityName = useSelector(state => state.location.cityName);

    console.log(cityName);


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

