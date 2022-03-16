import { fetch } from "../fetch";

export const get_exist_time = async (date) => {
  console.log("exist time", date);
  const {data} = await fetch().post(`/appointment/exist-times`, date);
  console.log( "!!!!!!!!!!",{data});
  return {data};
};
