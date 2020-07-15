import React from "react";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

let AuthRedirect = (Component) => {
    class Redirect  extends React.Component {
        render() {
            if (!this.props.isAuth)
                return <div>Redirect</div>;
            return <Component {...this.props}/>
        }
    };
   let ConnectedAuthRedirect = connect(mapStateToProps)(Redirect);
    return ConnectedAuthRedirect;
};

export default AuthRedirect;