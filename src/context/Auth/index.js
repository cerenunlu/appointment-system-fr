import { createContext, useContext, useState } from "react";
import { post_login_request } from "../../api/Auth/login";
import { post_customer_register_request } from "../../api/Auth/register";
import { token_storage } from "../../helpers";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});


const { set_access_token, get_access_token, delete_token_data } = token_storage;

export const AuthProvider = ({ children }) => {
    let navigate = useNavigate();
    let INITIAL_STATE = { // global states
        response_login: [],
    };
    const [state, set_state] = useState(INITIAL_STATE);
    const post_login = async (login_data) => {
        let response = await post_login_request(login_data);
        
        let isloggedIn = false
        const loggedIn = Object.values(response);
        if (loggedIn[0] == "success") {
            set_access_token(loggedIn[1]);
            const x = get_access_token();
            navigate('/admin-dash');


        } else {
            return loggedIn;
        }

    };
    const post_register = async (customer_data) => {
        if (customer_data.password == customer_data.confirm_password) {
            let response = await post_customer_register_request(customer_data);
            const loggedIn = Object.values(response);
            if (loggedIn[0] == "success") {
                console.log("basarili!!!!", loggedIn[0])
                set_access_token(loggedIn[1]);
                const x = get_access_token();
                console.log(x);
                navigate('/admin-dash');

            } else {
                console.log("basarisiz!!!!", loggedIn[0])
                return loggedIn;
            }
        }

    };

    return (

        <AuthContext.Provider value={{ // export this object

            post_login, post_register
        }}>
            {children}
        </AuthContext.Provider>
    )
}




export function useAuthContext() {
    const state = useContext(AuthContext);

    if (state === undefined) {
        throw new Error("PostsContext must be used within a PostsProvider");
    }
    return useContext(AuthContext);
}