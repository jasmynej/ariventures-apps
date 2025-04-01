import { Outlet, NavLink} from "react-router";
import socialLogo from '../assets/ariventures_logo_small.png'
import './styles/layout.css'
function AdminLayout() {
    return (
        <main className="w-screen h-screen flex overflow-hidden">
            {/* Sidebar */}
            <div className="h-full w-72 flex flex-col border-r shrink-0 border-yellow-900">
                <div className="flex gap-2 items-center border-b p-4 border-yellow-900">
                    <img src={socialLogo} alt="Logo" className="w-24" />
                    <h2>Ariventures Admin</h2>
                </div>
                <div className="flex flex-col">
                    {[
                        { to: "countries", label: "Countries" },
                        { to: "visas", label: "Visa Status" },
                        { to: "cities", label: "Cities" },
                    ].map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `text-right border-b border-yellow-900 p-2 ${
                                    isActive ? "bg-yellow-900 text-white" : "hover:bg-yellow-900 hover:text-white"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </main>
    )
}

export default AdminLayout;