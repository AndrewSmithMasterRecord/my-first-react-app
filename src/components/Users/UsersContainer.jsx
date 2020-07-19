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

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default compose(
    authRedirect,
    connect(mapStateToProps, {
        setCurrentPage, setUsersCounter, setFetchingState,
        getUsers, setFollow, clearFollow
    })
)(Users);