import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png' alt="ava" />
      {props.message}
      <div>
        <span>like </span>{props.likesCount}
      </div>
    </div>


  );
}

export default Post;