import React from 'react';
import { DateInformation } from './styledDate';
import { useCurrentDate } from './useCurentDate';

export const CurrentDate = () => {
    const date = useCurrentDate();
    return (
        <DateInformation> {date.toLocaleString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} | {date.toLocaleString("en-US", { hour: "2-digit",  minute: "2-digit" })} </DateInformation>
    );
};
