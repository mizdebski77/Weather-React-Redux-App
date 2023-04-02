import React, { useEffect } from 'react';
import { Search } from './Search/search';
import { CityName, ImgContainer, Information, Icon, InformationsWrapper, RestInformations, RestInformationsWrapper, Sky, Sun, SunContainer, Temperature, WeatherContainer, WeatherImage, Wrapper } from './styledHome';
import { CurrentDate } from './Date/date';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, selectStatus, selectWeather } from './FetchWeather/weatherSlice';
import temperature from "../Images/Weather/temperature.svg";
import tear from "../Images/Weather/tear.svg";
import wind from "../Images/Weather/wind.svg";
import sun from "../Images/Weather/sun.svg";
import sunset from "../Images/Weather/sunset.svg";




export const Home = () => {
    const selector = useSelector(selectWeather);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    console.log();

    if (status !== "loading") {


        return (
            <Wrapper>
                <Search />
                <InformationsWrapper>
                    <CurrentDate />
                    <CityName>{selector.name}{","}  {selector.sys.country}</CityName>
                    <WeatherContainer>
                        <ImgContainer>
                            {selector.weather[0].description}
                            <WeatherImage src={`http://openweathermap.org/img/wn/${selector.weather[0].icon}.png`} />
                        </ImgContainer>
                        <Temperature> {Math.round(selector.main.temp - 273)}° </Temperature>
                        <RestInformationsWrapper>
                            <RestInformations> <Icon src={temperature} />Real Feel : <Information>{Math.round(selector.main.feels_like - 273)}°</Information></RestInformations>
                            <RestInformations> <Icon src={tear} /> Humdititi : <Information> {selector.main.humidity}%</Information></RestInformations>
                            <RestInformations> <Icon src={wind} />Wind : <Information> {selector.wind.speed}km/h</Information></RestInformations>
                        </RestInformationsWrapper>
                    </WeatherContainer>
                    <SunContainer>
                        <Sun> <Icon src={sun} /> Rise </Sun>
                        <Sun> <Icon src={sunset} /> Set </Sun>
                        <Sun> <Icon src={sun} /> High </Sun>
                        <Sun> <Icon src={sun} /> Low </Sun>
                    </SunContainer>
                </InformationsWrapper>
            </Wrapper>
        );
    }

};

