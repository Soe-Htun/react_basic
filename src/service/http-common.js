import axios from 'axios';

const http = axios.create();
http.interceptors.request.use(
    function(config) {
        config.baseURL = process.env.REACT_APP_BASE_URL;
        config.headers.Authorization = 'Bearer' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzkwMjQ3MTYsImlhdCI6MTY3NjQzMjcxNiwic3ViIjoyNjQxLCJsZ24iOiJSMDAxMjE0In0.IeaZP8GMFQV3_QUHeAxPazejLi3WMIknHDSexdcNDOc'
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    function error() {
        return Promise.reject(error)
    }
);

export const HTTP = http;