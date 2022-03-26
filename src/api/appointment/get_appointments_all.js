import { fetch } from "../fetch";

export const get_appointment_all_request = async () => {
  console.log("all id ");
  const {data} = await fetch().get(`/appointment`);
  console.log( "api get",{data}.data);
  return data;
};
