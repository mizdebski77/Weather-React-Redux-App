import React, { useEffect } from 'react';
import { Search } from './Search/search';
import { CityName, ImgContainer, Information, Icon, InformationsWrapper, RestInformations, RestInformationsWrapper, Sun, SunContainer, Temperature, WeatherContainer, WeatherImage, Wrapper, SunInfo, AdditionalInfoWrapper, Country } from './styledHome';
import { CurrentDate } from './Date/date';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, selectStatus, selectWeather } from './FetchWeather/weatherSlice';
import temperature from "../Images/Weather/temperature.svg";
import tear from "../Images/Weather/tear.svg";
import wind from "../Images/Weather/wind.svg";
import sun from "../Images/Weather/sun.svg";
import sunset from "../Images/Weather/sunset.svg";
import { Error } from './Error/error';
import { Loader } from './Loader/loader'

export const Home = () => {
    const selector = useSelector(selectWeather);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    function getDayOfWeek(dateStr) {
        const date = new Date(dateStr);
        const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = date.getDay();
        const weekDay = dayName[dayIndex];
        return weekDay;
    };

    function getFormattedTime(timeStr) {
        const time = new Date(timeStr);
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const currentTime = (new Date().getHours());

    if (status === "success") {
    }


    return (
        <Wrapper>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <>
                    <Search />
                    <InformationsWrapper>
                        <CurrentDate />
                        <CityName>{selector.location.name} <Country>({selector.location.country})</Country> </CityName>
                        <WeatherContainer>
                            <ImgContainer>
                                {selector.current.condition.text}
                                <WeatherImage src={selector.current.condition.icon} />
                            </ImgContainer>
                            <Temperature> {selector.current.temp_c}° </Temperature>
                            <RestInformationsWrapper>
                                <RestInformations> <Icon src={temperature} />Real Feel : <Information>{Math.round(selector.current.feelslike_c)}°</Information></RestInformations>
                                <RestInformations> <Icon src={tear} /> Humdititi : <Information> {selector.current.humidity}%</Information></RestInformations>
                                <RestInformations> <Icon src={wind} />Wind : <Information> {selector.current.wind_kph}km/h</Information></RestInformations>
                            </RestInformationsWrapper>
                        </WeatherContainer>
                        <AdditionalInfoWrapper>
                            <SunContainer>
                                <Sun > <Icon src={sun} /> <SunInfo> Rise </SunInfo></Sun>
                                <Sun oneColumn> {selector.forecast.forecastday[0].astro.sunrise} </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun> <Icon src={sunset} />  <SunInfo> Set </SunInfo> </Sun>
                                <Sun oneColumn> {selector.forecast.forecastday[0].astro.sunset} </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun> <Icon src={temperature} />   <SunInfo> High </SunInfo> </Sun>
                                <Sun oneColumn> {selector.forecast.forecastday[0].day.maxtemp_c}° </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun> <Icon src={temperature} />   <SunInfo> Low </SunInfo> </Sun>
                                <Sun oneColumn> {selector.forecast.forecastday[0].day.mintemp_c}° </Sun>
                            </SunContainer>
                        </AdditionalInfoWrapper>

                        <AdditionalInfoWrapper>
                            <SunContainer>
                                <Sun oneColumn> {getDayOfWeek(selector.forecast.forecastday[1].date)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[1].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[1].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun oneColumn> {getDayOfWeek(selector.forecast.forecastday[2].date)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[2].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[2].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun oneColumn> {getDayOfWeek(selector.forecast.forecastday[3].date)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[3].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[3].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun oneColumn> {getDayOfWeek(selector.forecast.forecastday[4].date)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[4].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[4].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                        </AdditionalInfoWrapper>


                        <AdditionalInfoWrapper>
                            <SunContainer>
                                <Sun oneColumn> {getFormattedTime(selector.forecast.forecastday[0].hour[currentTime + 1].time)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[1].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[1].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun oneColumn> {getFormattedTime(selector.forecast.forecastday[0].hour[currentTime + 2].time)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[2].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[2].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun oneColumn> {getFormattedTime(selector.forecast.forecastday[0].hour[currentTime + 3].time)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[3].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[3].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                            <SunContainer>
                                <Sun oneColumn> {getFormattedTime(selector.forecast.forecastday[0].hour[currentTime + 4].time)} </Sun>
                                <Sun> <WeatherImage small src={selector.forecast.forecastday[4].day.condition.icon} />   <SunInfo> {Math.round(selector.forecast.forecastday[4].day.avgtemp_c)} ° </SunInfo> </Sun>
                            </SunContainer>
                        </AdditionalInfoWrapper>
                    </InformationsWrapper>
                </>
            }
        </Wrapper>
    );


};

