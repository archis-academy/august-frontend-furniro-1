import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/main';
import { SignUp } from './pages/SignUp';
import Login from './pages/login';
import Navbar from './Components/Navbar/navbar';
import Shop from './pages/Shop';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
import CheckoutPage from './pages/checkout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
