import { fetch } from "../fetch";

export const get_appointment_by_customer_id_request = async (id) => {
  console.log("customer id ");
  const {data} = await fetch().get(`/appointment/by-customer-id/${id}`);
  console.log( "!!!!!!!!!!",{data}.data);
  return data;
};
