import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return <div >
        <div className={p.postInput}>
        <h3>My posts</h3>
        <div >
            <textarea></textarea>
            <div>
                <button>Отправить</button>
            </div>
        </div>
        </div>

        <Post message='Hello world' likeCount='10'/>
        <Post message='Oppa!' likeCount='2'/>
    </div>
};

export default MyPosts;