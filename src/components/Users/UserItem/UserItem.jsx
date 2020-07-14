import React from "react";
import s from './UserItem.module.css'
import userPhoto from '../../../assets/photos/user.jpg'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {

    let onFollowChange = () => {

        if (props.followState) {
            props.follow(props.userId);
        } else {
            props.unfollow(props.userId);
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