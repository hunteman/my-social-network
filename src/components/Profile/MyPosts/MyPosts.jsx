import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';

const MyPosts = (props) => {
    debugger;

    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount} />
    );

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div style={{maxWidth:"inherit"}}>
                <textarea rows="8"></textarea>
                <Button variant="contained" className={s.addButton}>Add post</Button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;