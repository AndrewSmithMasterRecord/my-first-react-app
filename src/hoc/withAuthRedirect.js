import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const authRedirect = (Component) => {
    class Redirect extends React.Component {
        render() {
            debugger
            if (!this.props.isAuth) {
                this.props.history.push('/login');
            }
            return <Component {...this.props}/>
        }
    };
    let ConnectedAuthRedirect = connect(mapStateToProps)(Redirect);
    let ConnectToHistory = withRouter(ConnectedAuthRedirect);
    return ConnectToHistory;
};

export default authRedirect;