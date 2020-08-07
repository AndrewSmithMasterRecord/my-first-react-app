import React from 'react';
import h from './Header.module.css'

const Header = (props) => {
    return <header className={h.header + ' ' + h.headerGrid}>
        <div className={h.imggrid}>
            <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt=""/>
        </div>
        <div className={h.auth}>
            <div >
                {props.isAuth ? <span>{props.data.login}</span> : <span>Login </span>}
            </div>
            <div>
                {props.isAuth && <button onClick={props.logOut}>Logout</button>}
            </div>
        </div>
    </header>
};

export default Header;