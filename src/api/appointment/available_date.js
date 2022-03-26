import { fetch } from "../fetch";

export const get_exist_time = async (date) => {
  const { data } = await fetch().post(`/appointment/exist-times`, date);

  return { data };
};
