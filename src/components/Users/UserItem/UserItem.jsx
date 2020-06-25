import React from "react";
import s from './UserItem.module.css'
import userPhoto from '../../../assets/photos/user.jpg'

const UserItem = (props) => {

    let onFollowChange = () => {
        props.follow(props.userId);
    };

    return (
        <div className={s.main}>
            <div className={s.logo}>
                <div>
                    <img
                        src={props.userAvatar? props.userAvatar : userPhoto}
                        alt=""/>
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
                    {props.status? props.status : '...'}
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