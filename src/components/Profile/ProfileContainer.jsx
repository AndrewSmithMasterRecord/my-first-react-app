import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile_reducer";
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
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = this.props.authId;
        this.props.getProfile(userId);
    }


    render() {
        return <Profile {...this.props} />
    }
};

let ProfileContainerURL = withRouter(ProfileContainerAPI);
let ProfileContainer = connect(mapStateToProps, {getProfile})(ProfileContainerURL);

export default ProfileContainer;