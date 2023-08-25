import {NavLink} from "react-router-dom";

// This is called named export
const Navbar = () => {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
            <ul className="navbar-nav bg-white">
                <li className="nav-item">
                    <NavLink style={navLinkStyles} to="/" className="nav-link shadow">Home</NavLink> {/* NavLink is called Active link */}
                </li>
                <li>
                    <NavLink style={navLinkStyles} to="/schedule" className="nav-link shadow">Schedule</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;