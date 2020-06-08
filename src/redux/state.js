const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: '1', likes: '10', message: 'Hello world'},
                {id: '2', likes: '2', message: 'Oppa!'},
            ],
            newPostText: 'Write here something ...',
        },
        dialogsPage: {
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
            newMessageText: 'Write here something ...',
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State has changed');
    },
    dispatch(action) {
        if (action.type === ADD_POST) { //добавление нового поста
            let lastId = Number(this._state.profilePage.postData[this._state.profilePage.postData.length - 1].id);
            let messageObj = {
                id: String(lastId + 1),
                likes: '0',
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.postData.push(messageObj);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else {
            if (action.type === UPDATE_POST_TEXT) { // Обновление текста в textarea
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            } else {

                if (action.type === ADD_MESSAGE) { // Добавление нового сообщения
                    let lastId = Number(this._state.dialogsPage.messagesData[this._state.dialogsPage.messagesData.length - 1].id);
                    let messageObj = {
                        id: String(lastId + 1),
                        message: this._state.dialogsPage.newMessageText
                    };
                    this._state.dialogsPage.messagesData.push(messageObj);
                    this._state.dialogsPage.newMessageText = '';
                    this._callSubscriber(this._state);
                } else {

                    if (action.type === UPDATE_MESSAGE_TEXT) { // Обновление текста в textarea
                        this._state.dialogsPage.newMessageText = action.newText;
                        this._callSubscriber(this._state);
                    }
                }
            }
        }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});


window.store = store;

export default store;