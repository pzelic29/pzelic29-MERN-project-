import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../context/login-context";
import "./NavLinks.css";
const NavLinks = (props) => {
  const login = useContext(LoginContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {login.isLoggedIn && (
        <li>
          <NavLink to="/ul/places">MY PLACES</NavLink>
        </li>
      )}
      {login.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!login.isLoggedIn && (
        <li>
          <NavLink to="/login">LOG IN</NavLink>
        </li>
      )}
      {login.isLoggedIn && (
        <li>
          <button onClick={login.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
