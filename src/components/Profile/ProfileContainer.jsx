import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {clearProfile, getProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        authId: state.auth.data.id,
    }
};


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = this.props.authId;
        this.props.getProfile(userId);
    }

    componentWillUnmount() {
        this.props.clearProfile();
    }

    render() {
        if (!this.props.profileInfo)
            return <Preloader/>;
        return <Profile {...this.props} />
    }
};
let ProfileRedirect = withAuthRedirect(ProfileContainerAPI);
let ProfileContainerURL = withRouter(ProfileRedirect);

export default connect(mapStateToProps, {getProfile, clearProfile})(ProfileContainerURL);