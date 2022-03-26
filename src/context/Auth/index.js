import { createContext, useContext, useState } from "react";
import { post_login_request } from "../../api/Auth/login";
import { post_customer_register_request } from "../../api/Auth/register";
import { token_storage, user_storage, user_data_storage } from "../../helpers";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({});

const { set_access_token, get_access_token, delete_token_data } = token_storage;
const { set_user_tokens, get_user_data } = user_storage;
const { setData, getData } = user_data_storage;
export const AuthProvider = ({ children }) => {
  let navigate = useNavigate();
  let INITIAL_STATE = {
    // global states
    response_login: [],
  };
  const [state, set_state] = useState(INITIAL_STATE);
  const post_login = async (login_data) => {
    let response = await post_login_request(login_data);
    const loggedIn = Object.values(response);
    if (loggedIn[0] == "success") {
      set_access_token(loggedIn[1]);
      set_user_tokens(loggedIn[1]);
      setData(response.userData);
      const a = getData();
      navigate("/dashboard");
      return response;
    } else {
      return loggedIn;
    }
  };
  const post_register = async (customer_data) => {
    if (customer_data.password == customer_data.confirm_password) {
      let response = await post_customer_register_request(customer_data);
      const loggedIn = Object.values(response);
      if (loggedIn[0] == "success") {
      
        set_access_token(loggedIn[1]);
        const x = get_access_token();

        const test = getData();
       
        navigate("/admin-dash");
      } else {
     
        return loggedIn;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        // export this object

        post_login,
        post_register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const state = useContext(AuthContext);

  if (state === undefined) {
    throw new Error("PostsContext must be used within a PostsProvider");
  }
  return useContext(AuthContext);
}
