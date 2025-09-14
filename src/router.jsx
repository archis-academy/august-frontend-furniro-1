import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './components/home';
import { SignUp } from './Components/SignUp/SignUp';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
