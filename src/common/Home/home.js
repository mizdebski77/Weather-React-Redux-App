import React from 'react';
import { Search } from './Search/search';
import { CityName, DateInformation, InformationsWrapper, RestInformations, RestInformationsWrapper, Sky, Temperature, WeatherContainer, WeatherImage, Wrapper } from './styledHome';
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
                    <WeatherImage src={sun} />
                    <Temperature> 23° </Temperature>
                    <RestInformationsWrapper>
                        <RestInformations>Real Feel: 28°  </RestInformations>
                        <RestInformations>Humdititi: 80%</RestInformations>
                        <RestInformations>Wind: 25 km/h</RestInformations>

                    </RestInformationsWrapper>
                </WeatherContainer>
            </InformationsWrapper>
        </Wrapper>
    );
};

