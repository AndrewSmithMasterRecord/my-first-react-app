import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth, setIsFetching} from "../../redux/auth_reducer";
import * as axios from "axios";

let mapStateToProps = (state) => ({
    messages: state.auth.messages,
    data: state.auth.data,
    isFetching: state.auth.isFetching,
    isAuth: !state.auth.resultCode
});


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'b89a2c08-7d00-43b6-8753-a462d1981a9f'
            }
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