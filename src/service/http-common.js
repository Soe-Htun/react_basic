import axios from 'axios';

const http = axios.create();
http.interceptors.request.use(
    function(config) {
        config.baseURL = process.env.REACT_APP_BASE_URL;
        config.headers.Authorization = 'Bearer' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzE3NjIzNDcsImlhdCI6MTY2OTE3MDM0Nywic3ViIjo1MSwibGduIjoiUjAwMDAzOSJ9.tww5QZRC2H14_kgDlic9YWRxkBCQB23d5qbwonMQuso'
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    function error() {
        return Promise.reject(error)
    }
);

export const HTTP = http;