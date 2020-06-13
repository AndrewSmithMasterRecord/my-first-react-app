import React from "react";
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
    let usersMap = props.users
        .map(item => <UserItem name={item.fullName}
                               status={item.status}
                               country={item.location.country}
                               city={item.location.city}
                               followState={item.followed}
                               userId={item.id}
                               follow={props.followToggle}
                               key={item.id}
        />);
    return (
        <div>
            { usersMap }
        </div>
    )
};

export default Users