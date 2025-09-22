import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/home';
import { SignUp } from './Components/SignUp/SignUp';
import ButtonDemo from './components/Button/buttondemo';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/buttons" element={<ButtonDemo />} />
      </Routes>
    </BrowserRouter>
  );
};
