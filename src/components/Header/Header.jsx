import React from 'react';
import h from './Header.module.css'

const Header = (props) => {
    return <header className={h.header}>
        <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt=""/>
        <div className={h.auth}>
            <span>{props.data.login}</span>
        </div>
    </header>
};

export default Header;