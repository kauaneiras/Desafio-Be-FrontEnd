import React from "react";
import { Titles, Title, Photo, Name, DotContainer, Dot } from "../styles/employee-titles-styles";

const EmployeeTitles: React.FC = () => {
    return (
        <Titles>
            <Photo>FOTO</Photo>
            <Name>NOME</Name>
            <Title>CARGO</Title>
            <Title>DATA DE ADMISSÃO</Title>
            <Title>TELEFONE</Title>
            <DotContainer>
            <Dot/>
            </DotContainer>
        </Titles>
    );
};

export default EmployeeTitles;