import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
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
`;

export const Image = styled.img`
    width: 20px;
`;  