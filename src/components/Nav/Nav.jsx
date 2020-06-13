import React from 'react';
import  n from './Nav.module.css'
import {NavLink} from "react-router-dom";
const Nav = () => {
    return <nav className={n.nav}>
        <div className={n.item}>
            <NavLink to='/profile' activeClassName={n.active}>Profiler</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to='/dialogs' activeClassName={n.active}>Messages</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to='/news' activeClassName={n.active}>News</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to='/music' activeClassName={n.active}>Music</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to='/settings' activeClassName={n.active}>Settings</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to='/users' activeClassName={n.active}>Users</NavLink>
        </div>

    </nav>
};

export default Nav;