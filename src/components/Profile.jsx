import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <main className={s.content}>
        <div>
          <img className={s.cover} src="http://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </main>
  );
}

export default Profile;