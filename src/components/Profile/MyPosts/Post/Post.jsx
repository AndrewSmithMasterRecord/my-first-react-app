import React from 'react';
import p from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <span> {props.likeCount} likes</span>
            {props.message}
        </div>
    )
};

export default Post;