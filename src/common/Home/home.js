import React from 'react';
import { Search } from './Search/search';
import { CityName, DateInformation, ImgContainer, Information, InformationsWrapper, RestInformations, RestInformationsWrapper, Sky, Temperature, WeatherContainer, WeatherImage, Wrapper } from './styledHome';
import sun from '../Images/sun.svg'
export const Home = () => {
    return (
        <Wrapper>
            <Search />
            <InformationsWrapper>
                <DateInformation>
                    Tuesday, 31 May 2022 | Local Time 03:15 PM
                </DateInformation>
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

