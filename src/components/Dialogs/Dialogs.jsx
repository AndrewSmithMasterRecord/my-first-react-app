import React from "react";
import d from './Dialogs.module.css'
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData
        .map(item => <DialogItem name={item.name} id={item.id} key={item.id}/>);
    let messageElements = props.state.messagesData
        .map(item => <Message text={item.message} key={item.id}/>);

    let textElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };
    let updateMessage = () => {
        let text = textElement.current.value;
        props.updateMessage(text);
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messageElements}
                <div>
                    <textarea ref={textElement}
                              value={props.state.newMessageText}
                              onChange={updateMessage}
                              placeholder={'Write here something'}
                    />
                    <div>
                        <button onClick={addMessage}>Нажми меня нежно</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;