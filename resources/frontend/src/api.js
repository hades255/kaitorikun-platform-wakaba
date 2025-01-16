import axios from "axios";
import { API_ROUTE } from "./config";

const api = axios.create({
    baseURL: API_ROUTE,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("userdata");

        if (token) {
            config.headers["Authorization"] = `Bearer ${
                JSON.parse(token).access_token
            }`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
