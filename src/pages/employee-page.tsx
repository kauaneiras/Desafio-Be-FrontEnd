import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/base.tsx';
import { getData, employees } from '../services/connection.tsx';
import Navbar from '../components/navbar-component.tsx';
import { Employee } from '../interfaces/employee-interface.tsx';
import EmployeeTitles from '../components/employee-titles-component.tsx';
import EmployerCard from '../components/employee-card-component.tsx';


const EmployerPage: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {const result = await getData(employees); setData(result);} 
      catch (error) {console.error('Error fetching data:', error);}
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Navbar />
      <StyledContent>
        <EmployeeTitles />
        <StyledList>
          {data.map((employee) => (
            <EmployerCard key={employee.id} employee={employee} />
          ))}
        </StyledList>
      </StyledContent>
    </Container>
  );
};


export default EmployerPage;


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 95%;
  overflow-y: auto;
  background-color: white;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover {
    scrollbar-width: thin;
  }

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const StyledList = styled.ul`
  width: 100%;
  max-height: 500px;
`;