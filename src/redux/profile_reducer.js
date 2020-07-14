import {profileAPI} from "../API/profileApi";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const IS_FETCHING = 'IS_FETCHING';

let initial_value = {
    postData: [
        {id: '1', likes: '10', message: 'Hello world'},
        {id: '2', likes: '2', message: 'Oppa!'},
    ],
    newPostText: '',
    isFetching: false,
    profileInfo: null
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
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo});
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        profileAPI.getProfile(userId)
            .then(item => {
                dispatch(setProfileInfo(item));
                dispatch(setIsFetching(false));
            })
    }
};

export default profileReducer