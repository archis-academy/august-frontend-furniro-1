import { Router } from './router';
import { useState } from 'react';
import { SignUp } from './Components/SignUp/SignUp.jsx';
import './App.scss';
import Navbar from "./Components/Navbar/navbar.jsx";
import Input from "./components/Input/input.jsx"
import Form from "./components/Form/form.jsx"

function App() {

  return (
    <>
      <Navbar /> 
      <Router />
    </>
  );
}

export default App;
