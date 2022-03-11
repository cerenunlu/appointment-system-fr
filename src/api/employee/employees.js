import { fetch } from "../fetch";

export const get_employees_list_request = async () => {
    const { data } = await fetch().get(`/employee`);
    console.log(data);
  
    return data
}