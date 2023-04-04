import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.main`
    max-width: 1000px;
    padding: 50px;
    margin: 0 auto;
    box-shadow: 0 0 30px #ffffff;
    background-image: linear-gradient(to bottom right,${({ theme }) => theme.color.gradeint2}, ${({ theme }) => theme.color.gradeint1});
    backdrop-filter: blur(5px);

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        padding: 20px;
    }
`;

export const InformationsWrapper = styled.section`
    width: 90%;
    margin: 50px auto;
    display: grid;
    grid-auto-rows: max-content;
    gap: 54px;

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        margin:20px auto;
        gap: 30px;
        width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.firtBreakPoint}px) {
        margin:20px auto;
        width: 100%;
    }
`;

export const CityName = styled.h1`
    margin: 0;
    font-size:48px;
    text-align: center;
    margin: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        font-size:32px;
        margin: 10px;
    }
`;

export const WeatherContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const ImgContainer = styled.div`
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        font-size: 24px;
    }
`;

export const WeatherImage = styled.img`
    width: 70px;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        width:50px;
    }
`;

export const Temperature = styled.h1`
    font-size: 68px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        font-size: 52px;
    }
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

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        font-size: 16px;
    }
`;

export const Information = styled.span`
    font-style: italic;
    font-weight: bold;
`;

export const Icon = styled(SVG)`
    width: 40px;
    fill: ${({ theme }) => theme.color.svgFill};

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        width: 28px;
    }
`;

export const AdditionalInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 30px;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        grid-template-columns: 1fr 1fr;
       row-gap: 30px;
    }    
`;

export const SunContainer = styled.div`
    display: grid;
    gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Sun = styled.div`
    display: grid;
    grid-template-columns:auto 30%;
    align-items: center;
    justify-content: center;
    text-align:  center;

    ${({ oneColumn }) => oneColumn && css`
        grid-template-columns: 1fr;
        text-align: center;
        font-size: 20px;
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.phone}px) {
        margin:0;
    }
`;

export const SunInfo = styled.h3`
    margin: 0;
    
`;
