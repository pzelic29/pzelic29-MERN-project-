import React from "react";

import Card from "../../shared/UIElements/Card";
import Input  from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import './Login.css';


const Login = () =>{
    const [formState,inputHandler] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password: {
            value:'',
            isValid:false
        }
    },false)

    const loginSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    return <Card className="login">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={loginSubmitHandler}>
            <Input 
            element="input" 
            id="email" 
            type="email" 
            label="E-mail" 
            validators={[VALIDATOR_EMAIL()]} 
            errorText="Enter a valid e-mail."
            onInput={inputHandler}
            />
            <Input 
            element="input" 
            id="password" 
            type="password" 
            label="Password" 
            validators={[VALIDATOR_MINLENGTH(8)]} 
            errorText="Enter a valid password, at least 8 characters."
            onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
        </form>
        </Card>;
};

export default Login;