const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const IS_FETCHING = 'IS_FETCHING';


let initial_value = {
    resultCode: 0,
    messages: [],
    data: {
        id: 2,
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
                    data: {id: action.id, email: action.email, login: action.login },
                    isAuth: true
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

export const setAuth = (id, email, login) => ({type: SET_AUTH_STATUS, id, email, login});
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

export default authReducer