import React from "react";
import {connect} from "react-redux";
import {
    clearFollow,
    getUsers,
    setCurrentPage,
    setFetchingState, setFollow,
    setUsersCounter
} from "../../redux/users_reducer";
import Users from "./Users";
import {compose} from "redux";
import authRedirect from "../../hoc/withAuthRedirect";
import {
    selectCurrentPage, selectFollowingInProgress,
    selectIsFetching,
    selectPageSize,
    selectTotalUsers,
     usersSuperSelector
} from "../../redux/users-selectors";


let mapStateToProps = (state) => {
    return {
        users: usersSuperSelector(state),
        currentPage: selectCurrentPage(state),
        pageSize: selectPageSize(state),
        totalUsers: selectTotalUsers(state),
        isFetching: selectIsFetching(state),
        followingInProgress: selectFollowingInProgress(state)
    }
};


export default compose(
    authRedirect,
    connect(mapStateToProps, {
        setCurrentPage, setUsersCounter, setFetchingState,
        getUsers, setFollow, clearFollow
    })
)(Users);