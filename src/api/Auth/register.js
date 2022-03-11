import { fetch } from "../fetch";

export const post_customer_register_request = async (customer_data) => {
    console.log(customer_data)
    const { data } = await fetch().post(`/customer`,customer_data);
    console.log(data);
  
    return data
}