import { Wrapper, Location, Button, Image } from './styledSearch';
import search from '../../Images/search.svg'
import { useState } from 'react';

export const Search = () => {

    const [location, setLocation] = useState("");

    const searchLocation = (event) => {
        event.preventDefault();
        setLocation(location);
        console.log(location);
    }


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

