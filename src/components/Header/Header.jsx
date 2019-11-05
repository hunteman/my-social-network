import React from 'react';
import s from './Header.module.css';
import logo from '../../images/icon-25.jpg';

const Header = () => {
    return (
    <header className={s.header}>
    <img src={logo} className={s.app-logo} alt="logo" />
  </header>
  );
}

export default Header;