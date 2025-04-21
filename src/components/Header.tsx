import logo from '../assets/ariventures_logo.jpg'
import {useNavigate} from "react-router";

function Header() {
    const navigate = useNavigate();
    return (
        <header className="w-screen flex  items-center justify-between p-5 shadow-sm">
            <div>
                <img src={logo} className="w-72" alt=" ariventures logo" />
            </div>

            <div className="gap-3">
                <button
                    onClick={() => navigate("/sign-up")}
                    className="bg-tea-rose-500 p-2 m-2
                hover:bg-tea-rose-600
                transition ease-in duration-200">
                    Sign Up
                </button>
                <button
                    onClick={() => navigate("/login")}
                    className="border-tea-rose-500 border p-2
                    hover:bg-tea-rose-500
                    transition ease-in duration-200">
                    Login
                </button>
            </div>
        </header>
    )
}

export default Header;