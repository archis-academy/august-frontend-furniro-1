import { Router } from './router';
import { useState } from 'react';
import { SignUp } from './Components/SignUp/SignUp.jsx';
import './App.scss';
import Navbar from "./components/Navbar/navbar.jsx";
import Input from "./components/Input/input.jsx"

function App() {

  return (
    <>
      <Input label="Email" placeholder="Enter your Emaiil here" type='email'/>
      <Navbar /> 
      <Router />
    </>
  );
}

export default App;
