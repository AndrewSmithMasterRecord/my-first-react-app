const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

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
                users: [...state.users, ...action.users]
            };

        default:
            return state;
    }
};

export const followToggleAC = (id) => ({type: FOLLOW_TOGGLE, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});



export default usersReducer

