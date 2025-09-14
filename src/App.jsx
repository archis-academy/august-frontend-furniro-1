import { Router } from './router';
import { useState } from 'react';
import { SignUp } from './Components/SignUp/SignUp.jsx';
import './App.scss';
import Navbar from "./components/Navbar/navbar.jsx";
function App() {
  return (
    <>
      <Navbar /> 
      <Router />
    </>
  );
}

export default App;
