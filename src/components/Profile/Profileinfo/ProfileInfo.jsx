import React from 'react';
import p from './ProfileInfo.module.css'
import ava from "../../../assets/photos/user.jpg";


const ProfileInfo = (props) => {
    return (
        <div className={p.container}>
            <div className={p.logo}>
                <img
                    src={props.profileInfo.photos.large ? props.profileInfo.photos.large : ava}
                    alt=""/>
            </div>
            <div className={p.description}>
                <b>Abaut me</b>: {props.profileInfo.aboutMe}<br/>
                <b>My name</b>: {props.profileInfo.fullName}<br/>
                <p><b>contacts: </b></p>
                <ul>
                    <li><b>facebook:</b>{props.profileInfo.contacts.facebook}<br/></li>
                    <li><b>vk: </b>{props.profileInfo.contacts.vk}<br/></li>
                    <li><b>github:</b> {props.profileInfo.contacts.github}</li>
                </ul>
            </div>
        </div>
    )
};


export default ProfileInfo;