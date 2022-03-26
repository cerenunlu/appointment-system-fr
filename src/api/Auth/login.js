import { fetch } from "../fetch";

export const post_login_request = async (logindata) => {
   
    const { data } = await fetch().post(`/auth/signin`,logindata);
  
    return data
}