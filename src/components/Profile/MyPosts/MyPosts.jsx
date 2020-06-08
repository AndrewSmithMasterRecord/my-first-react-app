import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postElements = props.postData
        .map((item) => {
            return <Post message={item.message} likeCount={item.likes}/>
        });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let updatePost = ()=>{
        let text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    };


    return <div>
        <div className={p.postInput}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={updatePost}
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