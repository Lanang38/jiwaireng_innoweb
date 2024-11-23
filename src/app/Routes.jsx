import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/home.jsx';
import { Pengajar } from '../pages/pengajar.jsx';
import { Pelajar } from '../pages/pelajar.jsx';
import { Profile } from "../pages/Profile";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pengajar" element={<Pengajar />} />
                <Route path="/pelajar" element={<Pelajar />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};
