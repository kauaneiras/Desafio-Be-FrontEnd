import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import EmployerPage from './pages/employer-page';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<EmployerPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App