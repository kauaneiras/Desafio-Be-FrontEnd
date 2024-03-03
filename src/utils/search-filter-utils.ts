import { Employee } from '../interfaces/employee-interface.tsx';

export const filterEmployees = (data: Employee[], searchText: string): Employee[] => {
    return data.filter((employee) => {
      const formattedDate = formatDateString(employee.admission_date);
      const searchTextFormatted = formatSearchText(searchText);
  
      return (
        employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
        employee.job.toLowerCase().includes(searchText.toLowerCase()) ||
        employee.phone.includes(searchText) ||
        formattedDate.includes(searchTextFormatted)
      );
    });
  };
  
  const formatDateString = (dateString: string): string => {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${year}-${month}-${day}T00:00:00.000Z`;
  };
  
  const formatSearchText = (searchText: string): string => {
    const [day, month, year] = searchText.split('/');
    if (year && month && day) {
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00.000Z`;
    }
    return searchText;
  };