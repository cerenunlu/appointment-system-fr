import { fetch } from "../fetch";

export const get_customers_list_request = async () => {
    const { data } = await fetch().get(`/customer`);
    console.log(data);
  
    return data
}