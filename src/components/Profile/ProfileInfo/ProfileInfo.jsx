import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <main>
        <div>
          <img className={s.cover} src="http://cdn.cnn.com/cnnnext/dam/assets/170407220916-04-iconic-mountains-matterhorn-restricted.jpg" alt="background" />
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </main>
  );
}

export default ProfileInfo;