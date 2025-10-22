import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/main';
import { SignUp } from './pages/SignUp';
import Login from './pages/login';
import Navbar from './components/Navbar/navbar';
import Footer from './Components/Footer';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
