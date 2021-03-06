import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        const { user } = this.props;

        return (<nav className="navbar navbar-expand-lg navbar-light shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">React App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        {user && user.biz && (<li className="nav-item">
                            <NavLink className="nav-link" to="/my-cards">My Cards</NavLink>
                        </li>)}

                    </ul>
                    <ul className="navbar-nav me-auto">
                        {!user && (<li className="nav-item">
                            <NavLink className="nav-link" to="/signin">SignIn</NavLink>
                        </li>)}
                        {!user &&
                            (<li className="nav-item">
                                <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                            </li>)}
                        {!user &&
                            (<li className="nav-item">
                                <NavLink className="nav-link" to="/biz-signup">Business</NavLink>
                            </li>)}
                        {user &&
                            (<li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </li>)}

                    </ul>

                </div>
            </div>
        </nav>);
    }
}

export default Navbar;