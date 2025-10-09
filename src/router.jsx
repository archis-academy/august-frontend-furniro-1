import { BrowserRouter, Routes, Route } from 'react-router';
import { SignUp } from './pages/SignUp';
import Login from './pages/login'
import { Home } from './pages/main';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login/favorites" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
