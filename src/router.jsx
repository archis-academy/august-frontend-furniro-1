import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './components/home'
import App from './App'
import Login from './login/login'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}