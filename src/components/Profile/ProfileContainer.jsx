import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setIsFetching, setProfileInfo} from "../../redux/profile_reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching
    }
};


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        let userId = this.props.match.params.userId;
        if(!userId)
            userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(item => {
                this.props.setProfileInfo(item.data);
                this.props.setIsFetching(false);
            });
    }

    render() {
        return <Profile {...this.props} />
    }
};

let ProfileContainerURL = withRouter(ProfileContainerAPI);
let ProfileContainer = connect(mapStateToProps, {setProfileInfo, setIsFetching})(ProfileContainerURL);

export default ProfileContainer;