import React, { useState, useEffect } from 'react';
import { Container, Content, StyledContent, StyledList } from '../styles/employee-page-styles.tsx';
import { getData, employees } from '../services/connection.tsx';
import Navbar from '../components/navbar-component.tsx';
import SearchBar from '../components/searchbar-component.tsx';
import { Employee } from '../interfaces/employee-interface.tsx';
import EmployeeTitles from '../components/employee-titles-component.tsx';
import EmployerCard from '../components/employee-card-component.tsx';
import ModalEmp from '../components/employee-modal.tsx';
import { filterEmployees } from '../utils/search-filter-utils.ts';

const EmployerPage: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {const result = await getData(employees); setData(result);} 
      catch (error) {console.error('Error fetching data:', error);}
    };
    fetchData();
  }, []);

  const filteredData = filterEmployees(data, searchText);

  return (
    <Container>
      <Navbar />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Content>
        <EmployeeTitles />
        <StyledContent>
          <StyledList>
            {filteredData.map((employee) => (
              <React.Fragment key={employee.id}>
                <EmployerCard key={employee.id} employee={employee} />
                <ModalEmp employee={employee} />
              </React.Fragment>
            ))}
          </StyledList>
        </StyledContent>
      </Content>
    </Container>
  );
};

export default EmployerPage;