const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initial_value = {
    dialogsData: [
        {id: '1', name: 'Andrew'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Victor'},
        {id: '4', name: 'Valera'},
        {id: '5', name: 'Sasha'},
        {id: '6', name: 'Petya'},
    ],
    messagesData: [
        {id: '1', message: "Hi!"},
        {id: '2', message: "Why are you there?"},
        {id: '3', message: "I don't understand!"},
        {id: '4', message: 'Valera'},
        {id: '5', message: 'Sasha'},
        {id: '6', message: 'Petya'},
    ],
    newMessageText: '',
};


const dialogsReducer = (state = initial_value, action) => {
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

