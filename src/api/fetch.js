import axios from "axios";
import Axios from "axios";
import { token_storage, user_storage } from "../helpers";
const API_VERSION = "v1"
const BASE_URL =  `http://localhost:8080/api`

const {get_access_token}=token_storage;
const {get_user_data,set_user_tokens}=user_storage;
export function fetch() {
    let data;
    const access_token = get_access_token();
    set_user_tokens(access_token);
    const user_token = get_user_data();
   
    if (typeof window !== 'undefined') {
      
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