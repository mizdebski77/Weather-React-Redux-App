import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    
    @media (max-width: ${({theme}) => theme.breakPoint.phone}px) {
        flex-direction: column;
    }
`;

export const Location = styled.input`
    background: white;
    padding: 10px;
    min-width: 350px;
    border: none;
    font-weight: normal;
    &:focus {
        outline: none;
    };

    @media (max-width: ${({theme}) => theme.breakPoint.phone}px) {
        min-width: 200px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border: none;
    background: white;
    min-width: 140px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        transform: scale(1.02);
    }

    @media (max-width: ${({theme}) => theme.breakPoint.phone}px) {
        justify-content: flex-start;
        gap: 10px;
    }
`;

export const Image = styled.img`
    width: 20px;
`;  