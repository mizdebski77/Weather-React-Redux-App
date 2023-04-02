import styled from "styled-components";
import SVG from "react-inlinesvg";

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
    gap: 30px;
`;

export const ImgContainer = styled.div`
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
`;

export const WeatherImage = styled.img`
    width: 70px;
`;

export const Temperature = styled.h1`
    font-size: 68px;
    margin: 0;
`;

export const RestInformationsWrapper = styled.div`
    display: grid;
    gap: 10px;
    text-align: left;
    align-items: center;
    justify-content: center;
`;

export const RestInformations = styled.h3`
    margin: 0;
    font-weight: normal;
    font-size: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const Information = styled.span`
    font-style: italic;
    font-weight: bold;
`;

export const Icon = styled(SVG)`
    width: 40px;
    fill: ${({theme}) => theme.color.svgFill};
`;

export const SunContainer = styled.div`
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-around;
`;

export const Sun = styled.h3`
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
    align-items: center;
`;
