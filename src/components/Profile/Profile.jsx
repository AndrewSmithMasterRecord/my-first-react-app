import React from 'react';
import p from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div className={`${p.profile} content`}>
        <div>
            <img
                src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Solar-web_5b783e66a0dd14b56c07227718cd636d.jpg"
                alt=""/>
        </div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
};

export default Profile;