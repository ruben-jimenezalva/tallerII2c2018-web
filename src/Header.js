import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "./containers/utils/auth"

const LoggedOutView = props => {
    if (!Auth.isAuthenticated()) {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Sign in
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Sign up
                    </Link>
                </li>
            </ul>
        );
    }
    return null;
};


const handleLogout = async event => {
    Auth.clearSession();
};

const LoggedInView = props => {

    if (Auth.isAuthenticated()) {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/servers" className="nav-link">
                        Servers
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/payments" className="nav-link">
                        Payments
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/trackings" className="nav-link">
                        Trackings
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/graphics" className="nav-link">
                        Reports
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={handleLogout}>
                        Logout
                    </Link>
                </li>
            </ul>
        );
    }

    return null;
};

class Header extends React.Component {
    render() {
        return (
            <div className="Appcontainer">

                <nav className="navbar navbar-light">
                    <div className="containerHeader">

                        <Link to="/" className="navbar-brand">
                            comprame
                        </Link>
                        <LoggedOutView />
                        <LoggedInView />

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;

//navbar navbar-light