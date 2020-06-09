import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let postDispatch = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let updatePostText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    };


    return <MyPosts addPost={postDispatch}
                    updatePost={updatePostText}
                    state = {state}
            />
};

export default MyPostsContainer;