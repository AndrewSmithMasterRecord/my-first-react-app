import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b89a2c08-7d00-43b6-8753-a462d1981a9f'
    }
});

export const userAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?count=${pageSize}&page=${page}`)
            .then(item => {
                return item.data;
            });
    },
    follow(userId = 2) {
       return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId = 2) {
       return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
};


