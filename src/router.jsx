import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/main';
import { SignUp } from './pages/SignUp';
import Login from './pages/login';
import Shop from './pages/Shop';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
import Profile from './pages/profile';
import { Blog } from './pages/Blog';
import { Favorites } from './pages/Favorites';
import CheckoutPage from './pages/checkout';
import SingleProductPage from './pages/singleProduct';
import Navbar from './Components/Navbar/Navbar.jsx';

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
        <Route
          path="/shop/:product_title"
          element={<SingleProductPage />}
        ></Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
