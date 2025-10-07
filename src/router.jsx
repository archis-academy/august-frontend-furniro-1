import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/main'; 
import { SignUp } from './pages/SignUp'; 
import Login from './pages/login';
import { ExploreMoreSection } from './Sections';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<ExploreMoreSection />} />
      </Routes>
    </BrowserRouter>
  );
};

