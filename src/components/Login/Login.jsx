import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    debugger
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label>Login</label>
            <div>
                <Field name={"login"} placeholder={"Login"} component={"input"} type={"text"}/>
            </div>

        </div>
        <div>
            <label>Password</label>
            <div>
                <Field name={"password"} placeholder={"Password"} component={"input"} type={"password"}/>
            </div>
        </div>
        <div>
            <div>
                <Field name={"Remember"} component={"input"} type={"checkbox"}/>
            </div>
            <label>Remember me</label>
        </div>
        <div>
            <button>Login</button>
        </div>

    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (data) => {
        console.log(data);
    };
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;