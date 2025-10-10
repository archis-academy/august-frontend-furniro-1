import { BrowserRouter, Routes, Route } from 'react-router';

import { SignUp } from './pages/SignUp';
import Login from './pages/login';
import { Home } from './pages/main';
import Carousel from './Components/Carousel';
import ExploreCard from './Components/ExploreCard';
import { ExploreMoreSection } from './Sections';
import Product from './Components/Product';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<ExploreMoreSection />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};
