//https://medium.com/@namtovar/configurando-axios-para-un-proyecto-react-vite-ts-030952c5306f

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    // headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.warn("Interceptor on request");

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.warn("Interceptor on response", response);

        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default instance;
