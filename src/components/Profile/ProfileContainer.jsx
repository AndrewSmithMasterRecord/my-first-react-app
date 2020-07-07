import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setIsFetching, setProfileInfo} from "../../redux/profile_reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching,
        authId: state.auth.data.id
    }
};


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        let userId = this.props.match.params.userId;
        if(!userId)
            userId = this.props.authId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'b89a2c08-7d00-43b6-8753-a462d1981a9f'
            }
        })
            .then(item => {
                this.props.setProfileInfo(item.data);
                this.props.setIsFetching(false);
            });
    }
    componentWillUnmount() {
        this.props.setProfileInfo(null);
    }

    render() {
        return <Profile {...this.props} />
    }
};

let ProfileContainerURL = withRouter(ProfileContainerAPI);
let ProfileContainer = connect(mapStateToProps, {setProfileInfo, setIsFetching})(ProfileContainerURL);

export default ProfileContainer;