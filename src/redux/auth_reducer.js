import {authAPI} from "../API/authFormApi";
import {stopSubmit} from "redux-form";

const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const IS_FETCHING = 'IS_FETCHING';


let initial_value = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: '',
        login: ''
    },
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initial_value, action) => {
        switch (action.type) {
            case SET_AUTH_STATUS:
                return {
                    ...state,
                    data: {id: action.id, email: action.email, login: action.login},
                    isAuth: action.isAuth
                };

            case IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.isFetching
                };
            default:
                return state;
        }
    }
;

export const setAuth = (id, email, login, isAuth) => ({type: SET_AUTH_STATUS, id, email, login, isAuth});
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

export const loginMe = data => {
    return dispatch => {
        authAPI.login(data)
            .then(response => {
                if (!response.resultCode) {
                    authAPI.authMe()
                        .then(response => {
                            dispatch(setAuth(response.data.id, response.data.email, response.data.login, true));
                            console.log(response.data.id, response.data.email, response.data.login);
                        })
                } else {
                    let message = response.messages.length > 0 ? response.messages[0] : "Some error!";
                    dispatch(stopSubmit("login", {_error: message}));
                }
            })
    }
};

export const logOutMe = () => {
    return dispatch => {
        authAPI.logout()
            .then(response => {
                if (!response.resultCode) {
                    dispatch(setAuth(null, null, null, false));
                }
            })
    }
};

export const authMe = () => {
    return dispatch => {
       return  authAPI.authMe()
            .then(response => {
                if (!response.resultCode)
                     dispatch(setAuth(response.data.id, response.data.email, response.data.login, true));
            })
    }
};

export default authReducer