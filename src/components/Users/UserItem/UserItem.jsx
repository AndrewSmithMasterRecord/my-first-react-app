import React from "react";
import s from './UserItem.module.css'
import userPhoto from '../../../assets/photos/user.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const UserItem = (props) => {

    let onFollowChange = () => {
        if (props.followState) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'b89a2c08-7d00-43b6-8753-a462d1981a9f'
                }
            })
                .then(item => {
                    if (item.data.resultCode==0)
                        props.follow(props.userId);
                });
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'b89a2c08-7d00-43b6-8753-a462d1981a9f'
                }
            })
                .then(item => {
                    debugger
                    if (item.data.resultCode==0)
                        props.follow(props.userId);
                });
        }
    };

    return (
        <div className={s.main}>
            <div className={s.logo}>
                <div>
                    <NavLink to={`/profile/${props.userId}`}> <img
                        src={props.userAvatar ? props.userAvatar : userPhoto}
                        alt=""/>
                    </NavLink>
                </div>
                <div>
                    <button className={s.button} onClick={onFollowChange}>
                        {props.followState ? 'Unfollow' : 'Follow'}
                    </button>
                </div>
            </div>
            <div className={s.dataContainer}>
                <div className={s.item1}>
                    {props.name}
                </div>
                <div className={s.item2}>
                    {props.status ? props.status : '...'}
                </div>
                <div className={s.item3}>
                    <div>
                        {props.country}
                    </div>
                    <div>
                        {props.city}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserItem