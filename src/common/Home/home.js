import React from 'react';
import { Search } from './Search/search';
import { CityName, ImgContainer, Information, InformationsWrapper, RestInformations, RestInformationsWrapper, Sky, Temperature, WeatherContainer, WeatherImage, Wrapper } from './styledHome';
import sun from '../Images/sun.svg'
import { CurrentDate } from './Date/date';
export const Home = () => {
    return (
        <Wrapper>
            <Search />
            <InformationsWrapper>
                <CurrentDate />
                <CityName>Londyn</CityName>
                <Sky>Cloudy</Sky>
                <WeatherContainer>
                    <ImgContainer>
                        <WeatherImage src={sun} />
                    </ImgContainer>
                    <Temperature> 23° </Temperature>
                    <RestInformationsWrapper>
                        <RestInformations>Real Feel : <Information>28°</Information></RestInformations>
                        <RestInformations>Humdititi : <Information>25%</Information></RestInformations>
                        <RestInformations>Wind : <Information>25 km/h</Information></RestInformations>
                    </RestInformationsWrapper>
                </WeatherContainer>
            </InformationsWrapper>
        </Wrapper>
    );
};

