import React from "react";

import './MainHearder.css';

const MainHearder = props => {
    return <header className="main-header">
        {props.children}
    </header>
};

export default MainHearder;