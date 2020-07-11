const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const USERS_COUNT = 'USERS_COUNT';
const SET_FETCHING_STATE = 'SET_FETCHING_STATE';
const SET_FOLLOWING_PROGRESS_STATE = 'SET_FOLLOWING_PROGRESS_STATE';


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
         }*/

    ],
    currentPage: 1,
    pageSize: 10,
    totalUsers: 0,
    isFetching: false,
    followingInProgress: []
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
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case USERS_COUNT:
            return {
                ...state,
                totalUsers: action.count
            };
        case SET_FETCHING_STATE:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_FOLLOWING_PROGRESS_STATE:
            let buttonBlockedArray = [...state.followingInProgress];
            action.followingInProgress ? buttonBlockedArray.push(action.userId) : buttonBlockedArray =
                buttonBlockedArray.filter(
                    value => value != action.userId
                );
            return {
                ...state,
                followingInProgress: [...buttonBlockedArray]
            };

        default:
            return state;
    }
};

export const followToggle = (id) => ({type: FOLLOW_TOGGLE, id: id});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page: page});
export const setUsersCounter = (count) => ({type: USERS_COUNT, count: count});
export const setFetchingState = (isFetching) => ({type: SET_FETCHING_STATE, isFetching: isFetching});
export const setFollowingProgressState = (followingInProgress, userId) => ({
    type: SET_FOLLOWING_PROGRESS_STATE,
    followingInProgress, userId
});


export default usersReducer

