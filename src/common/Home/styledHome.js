import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1000px;
    min-height: 90vh;
    padding: 50px;
    margin: 0 auto;
    box-shadow: 0 0 30px #ffffff;
    background-image: linear-gradient(to bottom right,${({ theme }) => theme.color.cyan}, ${({ theme }) => theme.color.blue});
`;

export const InformationsWrapper = styled.section`
    min-height: 70vh;
    width: 90%;
    margin: 50px auto;
    display: grid;
`;

export const DateInformation = styled.h3`
    text-align: center;
`;

export const Sky = styled.h2`
    margin: 0;
    text-align: center;
`;

export const CityName = styled.h1`
    margin: 0;
    font-size: 40px;
    text-align: center;
`;

export const WeatherContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const WeatherImage = styled.img`
    width: 50px;
`;

export const Temperature = styled.h1`

`;

export const RestInformationsWrapper = styled.div`
    display: grid;
`;

export const RestInformations = styled.h3`
    margin: 0;
`;