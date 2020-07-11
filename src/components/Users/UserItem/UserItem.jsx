import React from "react";
import s from './UserItem.module.css'
import userPhoto from '../../../assets/photos/user.jpg'
import {NavLink} from "react-router-dom";
import {userAPI} from "../../../API/userApi";

const UserItem = (props) => {

    let onFollowChange = () => {

        if (props.followState) {
            props.setFollowingProgressState(true, props.userId);
            userAPI.unfollow(props.userId)
                .then(item => {
                    if (item.resultCode == 0)
                        props.follow(props.userId);
                    props.setFollowingProgressState(false, props.userId);
                });
        } else {
            props.setFollowingProgressState(true, props.userId);
            userAPI.follow(props.userId)
                .then(item => {
                    if (item.resultCode == 0)
                        props.follow(props.userId);
                    props.setFollowingProgressState(false, props.userId);
                });
        }
    };
    //let buttonDisable = props.followingInProgress.indexOf(props.userId) > -1 ? true : false;
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
                    <button className={s.button} onClick={onFollowChange} disabled={props.followingInProgress
                        .some(item => props.userId === item)}>
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