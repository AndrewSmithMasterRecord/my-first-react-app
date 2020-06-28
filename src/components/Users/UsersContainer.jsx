import React from "react";
import {connect} from "react-redux";
import {
    followToggle,
    setCurrentPage,
    setFetchingState,
    setUsers,
    setUsersCounter
} from "../../redux/users_reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        isFetching: state.usersPage.isFetching
    }
};


let UsersContainer = connect(mapStateToProps, {
    followToggle, setUsers, setCurrentPage, setUsersCounter, setFetchingState
})(Users);

export default UsersContainer;