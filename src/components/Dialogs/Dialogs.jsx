import React from "react";
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Nav from "../Nav/Nav";

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                <div className={d.dialog +' ' + d.active}>
                   <NavLink to="/dialogs/1" activeClassName={d.active}>Andrey</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={d.active}>Dimych</NavLink>
                </div>
                <div className={d.dialog}>
                   <NavLink to="/dialogs/3" activeClassName={d.active}>Pavel</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={d.active}>Sergei</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={d.active}>Petya</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/6" activeClassName={d.active}>Sasha</NavLink>
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>
                    Hi!
                </div>
                <div className={d.message}>
                    Why are you?
                </div>
                <div className={d.message}>
                    I don't understand!
                </div>
            </div>
        </div>
    )
};

export default Dialogs;