import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from "./App";
import AdminLayout from "./admin/AdminLayout.tsx";
import AdminHome from "./admin/AdminHome.tsx";
import AdminVisas from "./admin/AdminVisas.tsx";



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="visas" element={<AdminVisas/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
