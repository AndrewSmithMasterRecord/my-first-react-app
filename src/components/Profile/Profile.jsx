import React from 'react';
import p from './Profile.module.css'
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import banner from '../../assets/photos/banner.png'
import Preloader from "../common/preloader";

const Profile = (props) => {
    if (!props.profileInfo)
        return <Preloader/>;
    return <div>
        <div className={`${p.profile} content`} style={{display: props.isFetching ? 'none' : 'block'}}>
            <div>
                <img
                    src={banner}
                    alt=""/>
            </div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    </div>
};

export default Profile;