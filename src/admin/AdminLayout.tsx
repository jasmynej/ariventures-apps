import { Outlet } from "react-router";
import socialLogo from '../assets/ariventures_logo_small.png'
import './styles/layout.css'
function AdminLayout() {
    return (
        <main className="w-screen h-screen flex">
            <div className="h-screen flex flex-col w-72 border-r">
                <div className="flex gap-2 items-center border-b">
                    <img src={socialLogo} alt="Logo" className="w-24"/>
                    <h2>Ariventures Admin</h2>
                </div>
                <div className="flex flex-col gap-2 p-2">
                    <div className="dash-nav-item">
                        <p>Countries</p>
                    </div>
                    <div className="dash-nav-item">
                        <p>Visa Statuses</p>
                    </div>
                </div>

            </div>
            <div>
                <Outlet/>
            </div>

        </main>
    )
}

export default AdminLayout;