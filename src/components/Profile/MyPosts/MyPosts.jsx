import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postElements = props.postData
        .map((item) => {
            return <Post message={item.message} likeCount={item.likes}/>
        });
    return <div>
        <div className={p.postInput}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
        { postElements }
    </div>
};

export default MyPosts;