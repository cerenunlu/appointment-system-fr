import { fetch } from "../fetch";

export const get_employee_by_id_request = async (id) => {
    const { data } = await fetch().get(`/employee/${id}`);
    
    return {data}
}