import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: '1', likes: '10', message: 'Hello world'},
                {id: '2', likes: '2', message: 'Oppa!'},
            ],
            newPostText: '',
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
            newMessageText: '',
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State has changed');
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;