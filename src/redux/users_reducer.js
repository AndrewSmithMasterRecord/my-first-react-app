const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const USERS_COUNT = 'USERS_COUNT';
const SET_FETCHING_STATE = 'SET_FETCHING_STATE';


let initial_value = {
    users: [
       /* {
            "name": "Limon",
            "id": 8961,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "FedechkoYuriy",
            "id": 8960,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }*/
        /*{
            id: '1',
            followed: true,
            fullName: 'Andrew',
            status: 'I am a boss',
            location: {city: 'Molodechno', country: 'Belarus'}
        },
        {
            id: '2',
            followed: false,
            fullName: 'Viktor',
            status: 'I am a boss too',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '3',
            followed: false,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Hoiniki', country: 'Belarus'}
        },
        {
            id: '4',
            followed: true,
            fullName: 'Petia',
            status: 'I am a boss too',
            location: {city: 'Gomel', country: 'Belarus'}
        },*/
    ],
    currentPage: 1,
    pageSize: 10,
    totalUsers: 0,
    isFetching: false
};


const usersReducer = (state = initial_value, action) => {
    switch (action.type) {
        case FOLLOW_TOGGLE:
            let userModify = (user, action) => {
                if (user.id === action.id)
                    return {
                        ...user,
                        followed: !user.followed
                    };
                return user;
            };

            return {
                ...state,
                users: state.users.map(item => userModify(item, action))
            };
        case SET_USERS:
            return {
                ...state,
                users: [ ...action.users]
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.page
            };
        case USERS_COUNT:
            return{
                ...state,
                totalUsers: action.count
            };
        case SET_FETCHING_STATE:
            return{
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state;
    }
};

export const followToggle = (id) => ({type: FOLLOW_TOGGLE, id: id});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (page) =>({type: SET_CURRENT_PAGE, page: page});
export const setUsersCounter = (count) => ({type: USERS_COUNT, count: count});
export const setFetchingState = (isFetching) => ({type: SET_FETCHING_STATE, isFetching: isFetching});




export default usersReducer

