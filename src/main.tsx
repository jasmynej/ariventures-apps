import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from "./App";
import AdminLayout from "./admin/AdminLayout.tsx";
import AdminHome from "./admin/AdminHome.tsx";
import AdminVisas from "./admin/AdminVisas.tsx";
import AdminCountries from "./admin/AdminCountries.tsx";
import AdminCities from "./admin/AdminCities.tsx";
import LoginPage from "./auth/LoginPage.tsx";
import SignUpPage from "./auth/SignUpPage.tsx";
import VisaStatusChecker from "./pages/VisaStatusChecker.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/visa-checker" element={<VisaStatusChecker/>}/>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="countries"  element={<AdminCountries/>}/>
                <Route path="visas" element={<AdminVisas/>}/>
                <Route path="cities" element={<AdminCities/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>
            <Route path="/:username" element={<ProfilePage/>}/>
        </Routes>
    </BrowserRouter>
);
