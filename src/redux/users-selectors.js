import {createSelector} from "reselect";

export const selectUsers = (state) => {
    return state.usersPage.users;
};

export const usersSuperSelector = createSelector(selectUsers, users => users.filter(it => true));

export const selectCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const selectPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const selectTotalUsers = (state) => {
    return state.usersPage.totalUsers;
};

export const selectIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const selectFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};