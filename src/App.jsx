import { Router } from './router';
import { SignUp } from './pages/SignUp/index.jsx';
import './App.scss';
import Navbar from "./components/Navbar/navbar.jsx";
import Input from "./components/Input/input.jsx"
import Form from "./components/Form/form.jsx"

function App() {

  return (
    <>
      <Form/>
      <Navbar /> 
      <Router />
    </>
  );
}

export default App;
