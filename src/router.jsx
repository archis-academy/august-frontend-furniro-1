import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/main';
import { SignUp } from './pages/SignUp';
import Login from './pages/login';
import { SingleProduct } from './pages/singleProduct';
import Navbar from './Components/Navbar/navbar';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop/:product_title" element={<SingleProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
