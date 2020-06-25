import React from "react";
import UserItem from "./UserItem/UserItem";
import *as axios from 'axios';
import s from './Users.module.css'

const Users = (props) => {

    let getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(item => {
                props.set_users(item.data.items);
            })
    };



    let usersMap = props.users
        .map(item => <UserItem name={item.name}
                               status={item.status}
                               country={'Belarus'}
                               city={'Molodechno'}
                               followState={item.followed}
                               userId={item.id}
                               follow={props.followToggle}
                               userAvatar={item.photos.small}
                               key={item.id}
        />);
    return (
        <div>
            {usersMap}
            <div className={s.position}>
                <button className={s.button} onClick={getUsers}>Get Users</button>
            </div>
        </div>
    )
};

export default Users