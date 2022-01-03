import React  from "react";
import { Link } from "react-router-dom";
import MainHearder from "./MainHeader";
import './MainNavigation.css';

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
        <nav>
            ...
        </nav>
    </MainHearder>
};

export default MainNavigation;