import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/home';
import { SignUp } from './Components/SignUp/SignUp';
import App from './App'
import Login from './components/login/login'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
