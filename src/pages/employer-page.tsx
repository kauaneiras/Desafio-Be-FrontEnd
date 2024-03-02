import React, { useState, useEffect } from 'react';
import { Container } from '../styles/base.tsx';
import { getData, employees } from '../services/connection.tsx';

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
    <Container>
      <h1>Employer Page</h1>
      <ul>
        {data.map((employee) => (
          <li key={employee.id}>
            <img src={employee.image} alt={employee.name} />
            <p>Name: {employee.name}</p>
            <p>Job: {employee.job}</p>
            <p>Admission Date: {employee.admission_date}</p>
            <p>Phone: {employee.phone}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default EmployerPage;
