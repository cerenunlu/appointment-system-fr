import { fetch } from "../fetch";

export const get_roles_list_request = async () => {
  const { data } = await fetch().get(`/role`);

  return data;
};