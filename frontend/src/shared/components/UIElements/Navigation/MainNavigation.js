import React  from "react";
import { Link } from "react-router-dom";
import MainHearder from "./MainHeader";
import './MainNavigation.css';
import NavLinks from "./NavLinks";
const MainNavigation = props =>{
    return <MainHearder>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">Places</Link>
        </h1>
        <nav className="main-navigation_header_nav">
            <NavLinks />
        </nav>
    </MainHearder>
};

export default MainNavigation;