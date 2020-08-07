import {authMe} from "./auth_reducer";

const INITIALAIZED = "INITIALAIZED";

let initialValue = {
    initialized: false
};

let appReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "INITIALAIZED" :
            return {
                ...state,
                initialized: true
            };
        default:
            return {
                ...state
            }
    }
};

const initializeAC = () => ({type: INITIALAIZED});

export const initialise = () => dispatch => {
    let promise = dispatch(authMe());
    Promise.all([promise])
        .then(() => {
            dispatch(initializeAC());
        })
};
export default appReducer;