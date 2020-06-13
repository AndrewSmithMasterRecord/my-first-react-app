import React from "react";
import s from './UserItem.module.css'

const UserItem = (props) => {

    let onFollowChange = () => {
        props.follow(props.userId);
    };

    return (
        <div className={s.main}>
            <div className={s.logo}>
                <div>
                    <img
                        src="https://yandex.by/images/_crpd/1O3zLa118/c041a2p76a0/1pHT6PaIOKWwlSWo1u-hCjRxxD4C1-DUBh1EQ8lAGdyKOb9UgsUQf3xwfvmvKDrlVnpVqBhn-nBbFJAOOLz35VKUFTtjTXghpcVg-8HvNh1mZROrFFQyFwNPFgJLAcv"
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
                    {props.status}
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