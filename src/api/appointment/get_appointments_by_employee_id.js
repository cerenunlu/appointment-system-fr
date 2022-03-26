import { fetch } from "../fetch";

export const get_appointment_by_employee_id_request = async (id) => {
  console.log("employee id ");
  const {data} = await fetch().get(`/appointment/by-employee-id/${id}`);
  console.log( "!!!!!!!!!!",{data}.data);
  return data;
};