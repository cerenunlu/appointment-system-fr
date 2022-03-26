import { createContext, useContext, useState } from "react";
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
    const post_register = async (customer_data) => {
        if(customer_data.password==customer_data.confirm_password){
            
        }
        let isloggedIn = false
        let response = await post_customer_register_request(customer_data);
        const loggedIn = Object.values(response);
        if (loggedIn[0] == "success") {
            set_access_token(loggedIn[1]);
            const x = get_access_token();
            delete_token_data();
            navigate('/admin-dash');


        } else {
            return isloggedIn;
        }

    };

    return (

        <AuthContext.Provider value={{ // export this object

            post_login
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