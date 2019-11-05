import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/profile'}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/profile'}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/profile'}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;