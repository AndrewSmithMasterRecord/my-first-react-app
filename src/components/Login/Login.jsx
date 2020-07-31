import React from "react";
import {Field, reduxForm} from "redux-form";
import {loginMe} from "../../redux/auth_reducer";
import {connect} from "react-redux";
import {maxLength, required} from "../../Utils/validators";
import {FieldTagCreator} from "../common/FieldTags/FieldTags";

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
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }

};

export default connect(null, {loginMe})(Login);