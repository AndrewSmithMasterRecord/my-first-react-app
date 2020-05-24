import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return <div className={p.myposts}>
        My posts
        <div> New posts</div>
        <Post message='Hello world' likeCount = '10'/>
        <Post message='Oppa!' likeCount = '2'/>
    </div>
};

export default MyPosts;