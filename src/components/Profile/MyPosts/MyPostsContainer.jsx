import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    let postDispatch = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let updatePostText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    };


    return <MyPosts addPost={postDispatch}
                    updatePost={updatePostText}
                    state={state}
    />
};*/

let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePost: (text) => {
            dispatch(updatePostTextActionCreator(text));
        }
    }
};


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;