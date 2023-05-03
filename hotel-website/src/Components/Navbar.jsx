import { NavLink } from "react-router-dom";
import "../Styles/Navbar.scss";

const Navbar = () => {
    return (
        <nav>

            <div className="logo">
                <p>Hotel Beach <span className="resort"> Resort </span></p>
            </div>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/rooms">Rooms</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;