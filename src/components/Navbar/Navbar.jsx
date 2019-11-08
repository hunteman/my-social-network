import React from 'react';
import Icon from '@material-ui/core/Icon';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to={'/profile'} activeClassName={s.active}>
                        <Icon>home</Icon>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/dialogs'} activeClassName={s.active}>
                        <Icon>textsms</Icon>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/profile'}>
                    <Icon>event</Icon>
                        News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/profile'}>
                    <Icon>library_music</Icon>
                        Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={'/profile'}>
                    <Icon>settings_applications</Icon>
                        Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;