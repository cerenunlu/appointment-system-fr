import { fetch } from "../fetch";

export const post_employee_by_department_request = async (departmentId) => {
    const { data } = await fetch().get(`/employee/employee_by_department/${departmentId}`);
    console.log("dataaaa", {data})
    return data.data
}