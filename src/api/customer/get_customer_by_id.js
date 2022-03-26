import { fetch } from "../fetch";

export const get_customer_by_id_request = async (id) => {
    
    const { data } = await fetch().get(`/customer/${id}`);
   
    return {data}
}