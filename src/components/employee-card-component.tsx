import React from "react";
import { Employee } from "../interfaces/employee-interface";
import { formatPhone } from "../utils/format-phone-utils";
import { formatDate } from "../utils/format-date-utils";
import { StyledListItem, StyledImage, Text, ContainerImg, Name } from "../styles/employee-card-styles";

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