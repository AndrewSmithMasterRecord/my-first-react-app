import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth, setIsFetching} from "../../redux/auth_reducer";
import * as axios from "axios";

let mapStateToProps = (state) => ({
    messages: state.auth.messages,
    data: state.auth.data,
    isFetching: state.auth.isFetching
});


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(item => {
                if (!item.data.resultCode) {
                    this.props.setAuth(item.data.data.id, item.data.data.email, item.data.data.login);
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

export default connect(mapStateToProps, {setAuth, setIsFetching})(HeaderContainer);