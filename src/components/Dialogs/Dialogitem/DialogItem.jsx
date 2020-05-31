import React from "react";
import d from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let active = (props.active === "true") ? d.active : "";

    return (
        <div className={d.dialog + ' ' + active}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={d.active}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;