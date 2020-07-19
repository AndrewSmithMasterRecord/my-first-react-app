import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {clearProfile, getProfile, getStatus, putStatus, setStatusToState} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import Preloader from "../common/preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        authId: state.auth.data.id,
        status: state.profilePage.status
    }
};


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = this.props.authId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentWillUnmount() {
        this.props.clearProfile();
    }

    render() {
        if (!this.props.profileInfo)
            return <Preloader/>;
        return <Profile {...this.props} />
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile, clearProfile, getStatus, setStatusToState, putStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI);
