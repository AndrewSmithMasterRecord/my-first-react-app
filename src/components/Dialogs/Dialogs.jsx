import React from "react";
import d from './Dialogs.module.css'
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData
        .map(item => <DialogItem name={item.name} id={item.id}/>);
    let messageElements = props.state.messagesData
        .map(item => <Message text={item.message}/>);
    let textElement = React.createRef();
    let addMessage = () => {
        let text = textElement.current.value;
        alert(text);
    };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messageElements}
                <div>
                    <textarea ref={textElement}></textarea>
                    <div>
                        <button onClick={addMessage}>Нажми меня нежно</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;