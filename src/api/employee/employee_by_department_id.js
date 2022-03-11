import { fetch } from "../fetch";

export const post_employee_by_department_request = async (department_id) => {
   
    const { data } = await fetch().post(`/employee/employee-department`,department_id);
  
  
    return data
}