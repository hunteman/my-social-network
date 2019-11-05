import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <main>
        <div>
          <img className={s.cover} src="http://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg"/>
        </div>
        <div>
          ava + description
        </div>
        <MyPosts hey='yo'/>
      </main>
  );
}

export default Profile;