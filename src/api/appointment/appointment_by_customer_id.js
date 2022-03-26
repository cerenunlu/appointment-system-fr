import { fetch } from "../fetch";

export const post_appointment_create = async (appointment_data) => {
  const { data } = await fetch().post(`/appointment`, appointment_data);

  return { data };
};
