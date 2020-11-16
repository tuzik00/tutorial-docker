import axios from 'axios';


const axiosInstance = axios.create({
    responseType: 'json',
    baseURL: 'http://localhost:8001',
});


export const getList = () => {
    return axiosInstance.get('articles/list');
};


export const getById = (id) => {
    return axiosInstance.get(`articles/${id}`);
};