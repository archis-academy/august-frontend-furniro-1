import { BrowserRouter, Routes, Route } from "react-router";
import App from './App'
import Login from './login/login'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}