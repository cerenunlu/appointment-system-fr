import { fetch } from "../fetch";

export const post_new_employee_request = async (new_employee_data) => {
  const { data } = await fetch().post(`/auth/signup`, new_employee_data);
  return data;
};
