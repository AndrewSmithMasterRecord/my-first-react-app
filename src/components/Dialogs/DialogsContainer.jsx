import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*const DialogsContainer = (props) => {
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

};*/

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;