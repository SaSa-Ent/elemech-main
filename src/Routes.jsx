import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Homepage from './Homepage'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Services" element={<Services />} />
      
    </Routes>
  );
};

export default AppRoutes;
