import React from "react";
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let active = (props.active === "true") ? d.active : "";
    return(
        <div className={d.dialog +' ' + active}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={d.active}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props)=> {
    return(
        <div className={d.message}>
            {props.text}
        </div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                <DialogItem name="Andrey" id="1" active="true" />
                <DialogItem name="Dimych" id="2" active="false"/>
                <DialogItem name="Pavel" id="3" />
                <DialogItem name="Sergei" id="4" />
                <DialogItem name="Petya" id="5" />
                <DialogItem name="Sasha" id="6" />
            </div>
            <div className={d.messages}>
                <Message text="Hi!"/>
                <Message text="Why are you there?"/>
                <Message text="I don't understand!"/>
            </div>
        </div>
    )
};

export default Dialogs;