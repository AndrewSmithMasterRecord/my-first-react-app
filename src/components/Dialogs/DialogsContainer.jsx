import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let MessageDispatch = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let updateMessageText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    };

    return <Dialogs addMessage={MessageDispatch}
                    updateMessage={updateMessageText}
                    state={state}
    />

};

export default DialogsContainer;