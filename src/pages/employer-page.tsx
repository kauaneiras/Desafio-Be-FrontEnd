import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/base.tsx';
import { getData, employees } from '../services/connection.tsx';
import Navbar from '../components/navbar.tsx';

interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

const EmployerPage: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(employees);
        console.log('Data fetched:', result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledContainer>
      <Navbar />
      <StyledContent>
        <StyledList>
          {data.map((employee) => (
            <StyledListItem key={employee.id}>
                <ContainerImg>
                  <StyledImage src={employee.image} alt={employee.name} />
                </ContainerImg>
                <Text>{employee.name}</Text>
                <Text>{employee.job}</Text>
                <Text>{employee.admission_date}</Text>
                <Text>{employee.phone}</Text>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`

`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 95%;
  height: 70%;
`;

const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  background-color: white;
  
`;

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

const Text = styled.p`
  color: black;
  width: 22.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerImg = styled.div`
  width: 10%;
  min-height: 49px;
  max-height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default EmployerPage;
