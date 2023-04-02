import React from 'react';
import { Wrapper, Location, Button, Image } from './styledSearch';
import search from '../../Images/search.svg'

export const Search = () => {
    return (
        <Wrapper>
            <Location placeholder='Enter The City or Country ' />
            <Button> <Image src={search} /> Search city </Button>
            
        </Wrapper>
    );
};

