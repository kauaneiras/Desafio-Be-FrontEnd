const url = 'http://localhost:3000';
const initial = "/";
const employees = '/employees';

const getData = async (endpoint: string) => {
  try {
    const response = await fetch(`${url}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getData, initial, employees };