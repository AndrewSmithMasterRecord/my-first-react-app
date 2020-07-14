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


let UsersContainer = connect(mapStateToProps, {
    setCurrentPage, setUsersCounter, setFetchingState,
    getUsers, setFollow, clearFollow
})(Users);

export default UsersContainer;