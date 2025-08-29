import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './components/home'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}