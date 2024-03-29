import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map(
        p => <Post message={p.message} likesCount={p.likesCount} />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <Button variant="contained" className={s.addButton} onClick={onAddPost}>Add post</Button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;