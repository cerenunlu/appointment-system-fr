import { fetch } from "../fetch";

export const post_customer_register_request = async (customer_data) => {
    const { data } = await fetch().post(`/customer`,customer_data);
    return data
}