const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initial_value = {
    postData: [
        {id: '1', likes: '10', message: 'Hello world'},
        {id: '2', likes: '2', message: 'Oppa!'},
    ],
    newPostText: '',
};

const profileReducer = (state = initial_value, action) => {
    switch (action.type) {
        case ADD_POST:
            let lastId = Number(state.postData[state.postData.length - 1].id);
            let messageObj = {
                id: String(lastId + 1),
                likes: '0',
                message: state.newPostText
            };
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, messageObj]
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer