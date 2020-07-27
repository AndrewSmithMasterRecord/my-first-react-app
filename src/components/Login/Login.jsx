import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginMe} from "../../redux/auth_reducer";
import {connect} from "react-redux";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label>Email</label>
            <div>
                <Field name={"email"} placeholder={"Email"} component={"input"} type={"text"}/>
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
                <Field name={"remember"} component={"input"} type={"checkbox"}/>
            </div>
            <label>Remember me</label>
        </div>
        <div>
            <button>Login</button>
        </div>

    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


class Login extends React.Component{
    onSubmit = (data) => {
        console.log(data);
       this.props.loginMe(data);

    };
    render(){
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }

};

export default connect(null, {loginMe})(Login);