import React from "react";
import styled from "styled-components";
import { Employee } from "../interfaces/employee-interface";
import { formatPhone } from "../utils/format-phone-utils";
import { formatDate } from "../utils/format-date-utils";

const EmployeeCard: React.FC<{ employee: Employee }> = ({ employee }) => {
    return (
        <StyledListItem>
            <ContainerImg>
                <StyledImage src={employee.image} alt={employee.name} />
            </ContainerImg>
            <Name>{employee.name}</Name>
            <Text>{employee.job}</Text>
            <Text>{formatDate(employee.admission_date)}</Text>
            <Text>{formatPhone(employee.phone)}</Text>
        </StyledListItem>
    );
}

export default EmployeeCard;

const StyledListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 1px 2px 0px #00000033;
`;

const StyledImage = styled.img`
  min-width: 34px;
  min-height: 34px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
`;

const Text = styled.h3`
  color: black;
  width: 20%; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerImg = styled.div`
  width: 12%;
  min-height: 49px;
  max-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h3`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: black;
    width: 28%;
`;


