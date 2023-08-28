import axios from 'axios';
import environment from '../config/env.config';

const axiosInstance = axios.create({
    baseURL: environment().github.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
