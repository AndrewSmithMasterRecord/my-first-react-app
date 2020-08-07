import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginMe} from "../../redux/auth_reducer";
import {connect} from "react-redux";
import {maxLength, required} from "../../Utils/validators";
import {FieldTagCreator} from "../common/FieldTags/FieldTags";
import {Redirect} from "react-router-dom";
import style from "./login.module.css"

let maxLen = maxLength(30);
let InputTag = FieldTagCreator("input");

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label>Email</label>
            <div>
                <Field name={"email"}
                       placeholder={"Email"}
                       component={InputTag}
                       type={"text"}
                       validate={[required, maxLen]}
                />
            </div>

        </div>
        <div>
            <label>Password</label>
            <div>
                <Field name={"password"}
                       placeholder={"Password"}
                       component={InputTag}
                       type={"password"}
                       validate={[required]}
                />
            </div>
        </div>
        <div>
            <div>
                <Field name={"remember"}
                       component={"input"}
                       type={"checkbox"}
                />
            </div>
            <label>Remember me</label>
        </div>
        {props.error && <div className={style.error}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>

    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


class Login extends React.Component {
    onSubmit = (data) => {
        console.log(data);
        this.props.loginMe(data);

    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }

};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {loginMe})(Login);