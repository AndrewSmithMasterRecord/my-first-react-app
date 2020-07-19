import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile',
    headers: {
        'API-KEY': 'b89a2c08-7d00-43b6-8753-a462d1981a9f'
    }
});

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`${userId}`)
            .then(item => {
                return item.data;
            })
    },
    getStatus(userId) {
        return instance.get(`/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    putStatus(status) {
        return instance.put(`/status`, {status})
            .then(response => {
                return response.data;
            })
    }
};


