import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile_reducer";


const MyPosts = (props) => {

    let postElements = props.postData
        .map((item) => {
            return <Post message={item.message} likeCount={item.likes}/>
        });

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let updatePost = (elem)=>{
        let text = elem.target.value;
        props.dispatch(updatePostTextActionCreator(text));
    };


    return <div>
        <div className={p.postInput}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText}
                          onChange={updatePost}
                          placeholder={'Write here something'}
                />
                <div>
                    <button onClick={addPost}>Отправить</button>
                </div>
            </div>
        </div>
        {postElements}
    </div>
};

export default MyPosts;