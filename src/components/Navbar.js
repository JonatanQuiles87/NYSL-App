import {NavLink, useLocation, useParams} from "react-router-dom";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import {auth} from "../utilities/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

// This is called named export
const Navbar = () => {
    const [user] = useAuthState(auth);
    const gameId = useParams().id || null;
    const pathName = useLocation().pathname;
    const messagesOrPicsPagePathVariable = pathName.split('/')[3] || '';  // This line is to be able to see if the last part of the message page
    // which is 'messages' exists out of the whole messages page path which is '/gamePage/:id/messages'
    // If this part of the path exists then we do not show the link which directs the user to messages page in navbar since the user is already on the messages page.
    const fullPathOfMessagesPage = gameId && !messagesOrPicsPagePathVariable ? `${pathName}/messages` : null;  // This line is creating the whole path for message page which is '/gamePage/:id/messages'
    const fullPathOfPicturesPage = gameId && !messagesOrPicsPagePathVariable ? `${pathName}/pictures` : null;

    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid justify-content-between">
            <ul className="navbar-nav bg-white">
                <li className="nav-item">
                    <NavLink style={navLinkStyles} to="/"
                             className="nav-link shadow">Home</NavLink> {/* NavLink is called Active link */}
                </li>
                <li>
                    <NavLink style={navLinkStyles} to="/schedule" className="nav-link shadow">Schedule</NavLink>
                </li>

                {user && gameId && !messagesOrPicsPagePathVariable ?
                    <>
                        <li>
                            <NavLink style={navLinkStyles} to={fullPathOfMessagesPage} className="nav-link shadow">Messages for Game {gameId}</NavLink>
                        </li>
                        <li>
                            <NavLink style={navLinkStyles} to={fullPathOfPicturesPage} className="nav-link shadow">Pictures for Game {gameId}</NavLink>
                        </li>
                    </>
                    : null
                }
            </ul>

            {user ? <SignOutButton displayName={user.displayName}/> : <SignInButton/>}
        </nav>
    )
}

export default Navbar;