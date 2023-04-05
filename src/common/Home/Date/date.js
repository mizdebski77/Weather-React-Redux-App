import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeather } from '../FetchWeather/weatherSlice';
import { DateInformation } from './styledDate';
import { useCurrentDate } from './useCurentDate';

export const CurrentDate = () => {

    function getFormattedTime(timeStr) {
        const time = new Date(timeStr);
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };


    const selector = useSelector(selectWeather);

    const date = useCurrentDate();
    return (
        <DateInformation> {date.toLocaleString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            { " "}| Local Time: {getFormattedTime(selector.location.localtime)} </DateInformation>
    );
};
