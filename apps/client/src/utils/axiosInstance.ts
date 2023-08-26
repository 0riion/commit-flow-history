import axios from 'axios';
import { getEnv } from '../config';

const axiosInstance = axios.create({
    baseURL: getEnv().NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': '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'
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
