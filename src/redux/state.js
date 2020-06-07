let state = {
    profilePage: {
        postData: [
            {id: '1', likes: '10', message: 'Hello world'},
            {id: '2', likes: '2', message: 'Oppa!'},
        ],
        newPostText: 'Write here something ...',
        addPost() {
            let lastId = Number(state.profilePage.postData[state.profilePage.postData.length - 1].id);
            let messageObj = {
                id: String(lastId + 1),
                likes: '0',
                message: state.profilePage.newPostText
            };
            state.profilePage.postData.push(messageObj);
            state.profilePage.newPostText = '';
            state.rerenderEntireTree(state);
        },
        updatePostText(text) {
            state.profilePage.newPostText = text;
            state.rerenderEntireTree(state);
        },
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
        addMessage() {
            let lastId = Number(state.dialogsPage.messagesData[state.dialogsPage.messagesData.length - 1].id);
            let messageObj = {
                id: String(lastId + 1),
                message: state.dialogsPage.newMessageText
            };
            state.dialogsPage.messagesData.push(messageObj);
            state.dialogsPage.newMessageText = '';
            state.rerenderEntireTree(state);
        },
        updateMessageText(text) {
            state.dialogsPage.newMessageText = text;
            state.rerenderEntireTree(state);
        },
    },
    rerenderEntireTre(){
        console.log('State is changed');
    }
};


window.state = state;

export default state;