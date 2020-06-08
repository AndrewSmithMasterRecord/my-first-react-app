import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.postData
        .map((item) => {
            return <Post message={item.message} likeCount={item.likes}/>
        });

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {type: 'ADD-POST'};
        props.dispatch(action);
    };
    let updatePost = ()=>{
        let text = newPostElement.current.value;
        let action = {
            type: 'UPDATE-POST-TEXT',
            newText: text
        }
        props.dispatch(action);
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