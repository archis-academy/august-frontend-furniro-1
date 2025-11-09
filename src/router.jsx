import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/main';
import { SignUp } from './pages/SignUp';
import Login from './pages/login';
import  SingleProduct from './pages/singleProduct';
import Navbar from './Components/Navbar/navbar';
import Shop from './pages/Shop';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
import Profile from './pages/profile';
import ProductComparison from './pages/productComparison';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/comparison" element={<ProductComparison />} />
        <Route path="/shop/:product_title" element={<SingleProduct />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
