import logo from '../assets/ariventures_logo.jpg'
import {Link} from "react-router";

function Header() {
    return (
        <header className="w-screen  flex flex-col items-center justify-center">
            <img src={logo} className="w-72" alt=" ariventures logo" />
            <Link to="/visa-checker">Visa Checker</Link>
        </header>
    )
}

export default Header;