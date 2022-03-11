import axios from "axios";
import Axios from "axios";
import { token_storage } from "../helpers";
const API_VERSION = "v1"
const BASE_URL =  `http://localhost:8080/api`

const {get_access_token}=token_storage;
export function fetch() {
    let data;
    const access_token = get_access_token();
    console.log(access_token)
    if (typeof window !== 'undefined') {
        console.log(window);
        let axios = Axios.create({
            baseURL: BASE_URL,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`,
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