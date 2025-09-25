import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/home';
import { SignUp } from './Components/SignUp/SignUp';
import ButtonDemo from './components/Button/buttondemo';
import Hero from './components/HeroSection/hero';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/buttons" element={<ButtonDemo />} />
        <Route path='/hero' element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
};
