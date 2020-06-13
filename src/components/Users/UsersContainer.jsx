import React from "react";
import {connect} from "react-redux";
import {followToggleAC, setUsersAC} from "../../redux/users_reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
  return {
      followToggle(id) {
          dispatch(followToggleAC(id));
      },
      set_users () {
          dispatch(setUsersAC());
      }
  }
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;