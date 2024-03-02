import React from "react";
import styled from "styled-components";

const EmployeeTitles: React.FC = () => {
    return (
        <Titles>
            <Photo>FOTO</Photo>
            <Title>NOME</Title>
            <Title>CARGO</Title>
            <Title>DATA DE ADMISSÃO</Title>
            <Title>TELEFONE</Title>
        </Titles>
    );
};

export default EmployeeTitles;

const Titles = styled.div`
    background: linear-gradient(180deg, #5A84C0 0%, #594ED2 100%);
    border-radius: 8px 8px 0px 0px;
    width: 100%;
    display: flex;
    height: 47px;
    justify-content: center;
    padding: 14px, 32px, 14px, 32px;
`;

const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    width: 22%;
`;

const Photo = styled.h2`
    display: flex;
    align-items: center;
    color: white;
    width: 12%;
    justify-content: center;
    align-items: center;
`;



