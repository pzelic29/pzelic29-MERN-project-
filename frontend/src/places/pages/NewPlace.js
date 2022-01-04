import React from "react";


import Input from "../../shared/FormElements/Input";
import './NewPlace.css';

const NewPlace =()=>{
    return <form className="place-form">
        <Input elemenz="input" type="text" label="Title" />
    </form>;
};

export default NewPlace;