import React from 'react';
import p from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements = props.state.postData
        .map((item) => {
            return <Post message={item.message} likeCount={item.likes} key={item.id}/>
        });

    let addPost = () => {
        props.addPost();
    };
    let updatePost = (elem)=>{
        let text = elem.target.value;
       props.updatePost(text);
    };

    return <div>
        <div className={p.postInput}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.state.newPostText}
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