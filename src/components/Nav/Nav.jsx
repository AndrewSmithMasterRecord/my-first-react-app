import React from 'react';
import  n from './Nav.module.css'
const Nav = () => {
    return <nav className={n.nav}>
        <div className={n.item}><a>Profiler</a></div>
        <div className={n.item}><a>Messages</a></div>
        <div className={n.item}><a>News</a></div>
        <div className={n.item}><a>Music</a></div>
        <div className={n.item}><a>Settings</a></div>

    </nav>
};

export default Nav;