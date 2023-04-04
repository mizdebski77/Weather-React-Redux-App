import styled from "styled-components";

export const DateInformation = styled.h2`
    text-align: center;
    font-weight: normal;
    word-spacing: 5px;
    font-size: 20px;

    @media (max-width: ${({theme}) => theme.breakPoint.phone}px) {
        font-size: 16px;
        margin: 10px 0 0 0;
    }
`;
