import React from 'react';
import p from './Post.module.css'


const Post = (props) => {
    return (
        <div className={p.container}>
            <div className={p.logo}>
                <img
                    src="https://yandex.by/images/_crpd/1O3zLa118/c041a2p76a0/1pHT6PaIOKWwlSWo1u-hCjRxxD4C1-DUBh1EQ8lAGdyKOb9UgsUQf3xwfvmvKDrlVnpVqBhn-nBbFJAOOLz35VKUFTtjTXghpcVg-8HvNh1mZROrFFQyFwNPFgJLAcv"
                    alt=""/>
                <div className={p.likes}>
                    <span> {props.likeCount} likes</span>
                </div>
            </div>
            <div className={p.message}>
                {props.message}
            </div>
        </div>
    )
};

export default Post;