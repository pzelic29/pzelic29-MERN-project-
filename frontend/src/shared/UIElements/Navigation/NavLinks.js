import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css'
const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to="/ul/places">MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to="/login">LOG IN</NavLink>
        </li>
    </ul>
};

export default NavLinks;