const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let lastId = Number(state.messagesData[state.messagesData.length - 1].id);
            let messageObj = {
                id: String(lastId + 1),
                message: state.newMessageText
            };
            state.messagesData.push(messageObj);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});

export default dialogsReducer

