import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1000px;
    min-height: 90vh;
    padding: 50px;
    margin: 0 auto;
    box-shadow: 0 0 30px #ffffff;
    background-image: linear-gradient(to bottom right,${({ theme }) => theme.color.gradeint2}, ${({ theme }) => theme.color.gradeint1});
    backdrop-filter: blur(5px);
`;

export const InformationsWrapper = styled.section`
    min-height: 70vh;
    width: 90%;
    margin: 50px auto;
    display: grid;
`;

export const DateInformation = styled.h3`
    text-align: center;
    font-weight: normal;
`;

export const CityName = styled.h1`
    margin: 0;
    font-size:52px;
    text-align: center;
`;

export const Sky = styled.h2`
    margin: 0;
    text-align: center;
    font-weight: normal;
    font-size: 28px;
`;

export const WeatherContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WeatherImage = styled.img`
    width: 50px;
`;

export const Temperature = styled.h1`
    font-size: 68px;
    margin: 0;
`;

export const RestInformationsWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

export const RestInformations = styled.h3`
    margin: 0;
    font-size: 20px;
`;

export const Information = styled.span`
    font-style: italic;
    font-weight: normal;
`;