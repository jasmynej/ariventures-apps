import { Outlet, NavLink} from "react-router";
import socialLogo from '../assets/ariventures_logo_small.png'
import './styles/layout.css'
function AdminLayout() {
    return (
        <main className="w-screen h-screen flex overflow-hidden">
            {/* Sidebar */}
            <div className="h-full w-72 flex flex-col border-r shrink-0 border-isabelline-600">
                <div className="flex gap-2 items-center justify-center border-b p-4 border-isabelline-600">
                    <img src={socialLogo} alt="Logo" className="w-24" />
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
                                `text-right border-b border-isabelline-600 p-2 ${
                                    isActive ? "bg-isabelline-600 " : "hover:bg-isabelline-600"
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