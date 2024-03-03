import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 95%;
    margin-top: 100px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`;

const InputDiv = styled.div`
    display: flex;
    align-items: center;
    width: 287px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #DFDFDF;
    border-radius: 5px;
    padding: 12px, 16px, 12px, 16px;
    font-size: 16px;
    background-color: white;
    @media (max-width: 768px) {
        width: 100%;
      }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    margin-left: 15px;
    padding: 12px, 16px, 12px, 16px;
    font-size: 16px;
    background-color: transparent;
    outline: none;

    &::placeholder {
        color: #9E9E9E;
    }

    &:focus {
        &::placeholder {
            color: #000;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
      } 
`;

const Img = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 15px;
    cursor: pointer;
`;

const Text = styled.h1`
    color: black;
    width: 20%; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export { Container, InputDiv, Input, Img, Text };