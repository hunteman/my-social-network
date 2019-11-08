import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts hey='yo' />
    </main>
  );
}

export default Profile;