import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import React from 'react';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
