import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='16'/>
                <Post message="It's my first post" likesCount='29'/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;