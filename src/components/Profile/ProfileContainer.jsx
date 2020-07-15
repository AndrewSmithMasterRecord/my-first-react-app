import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {clearProfile, getProfile} from "../../redux/profile_reducer";
import {Redirect, withRouter} from "react-router-dom";
import Preloader from "../common/preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching,
        authId: state.auth.data.id,
        isAuth: state.auth.isAuth
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
        debugger
        return <Redirect to='/login' />;
        if (!this.props.profileInfo)
            return <Preloader/>;
        return <Profile {...this.props} />
    }
};

let ProfileContainerURL = withRouter(ProfileContainerAPI);
//let withRedirectProfileContainer = withAuthRedirect(ProfileContainerURL)
let ProfileContainer = connect(mapStateToProps, {getProfile, clearProfile})(ProfileContainerURL);
let withRedirectProfileContainer = withAuthRedirect(ProfileContainer);
export default withRedirectProfileContainer;