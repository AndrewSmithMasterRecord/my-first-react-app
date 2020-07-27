import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth, setIsFetching} from "../../redux/auth_reducer";
import {authAPI} from "../../API/authFormApi";

let mapStateToProps = (state) => ({
    messages: state.auth.messages,
    data: state.auth.data,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
});


class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.authMe()
            .then(item => {
                if (!item.resultCode) {
                    this.props.setAuth(item.data.id, item.data.email, item.data.login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

export default connect(mapStateToProps, {setAuth, setIsFetching})(HeaderContainer);