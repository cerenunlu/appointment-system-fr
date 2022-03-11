import { fetch } from "../fetch";

export const get_departments_list_request = async () => {
    const { data } = await fetch().get(`/department`);
    console.log(data);
    console.log("test api")
  
    return data
}