import axios from "axios";
import Axios from "axios";
const API_VERSION = "v1"
const BASE_URL =  `http://localhost:8080/api`

export function fetch() {
    let data;
    if (typeof window !== 'undefined') {
        let axios = Axios.create({
            baseURL: BASE_URL,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        axios.interceptors.response.use(
            (response) => response,
            (err) => {
                // const { response, request } = err;
                // if(response) {
                //     if(response.status === 401) {
                //         token_storage.delete_token_data();
                //         window.location.href = '/sign-in'
                //     }
                // }
            }
        )
        return data = axios;
    }
    return data
};