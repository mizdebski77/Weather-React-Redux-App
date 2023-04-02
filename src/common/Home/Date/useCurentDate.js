import { useEffect, useState } from "react"

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return date;
};