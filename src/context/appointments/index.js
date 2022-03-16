import { createContext, useContext, useState } from "react";
import { post_appointment_create } from "../../api/appointment/appointment_by_customer_id";
import { get_exist_time } from "../../api/appointment/available_date";
const AppointmentContext = createContext({});

export function AppointmentProvider({ children }) {
  let INITIAL_STATE = {
    appointments_list: [],
  };
  let times = [
    {
      id: 1,
      time: "09:00",
    },
    {
      id: 2,
      time: "10:00",
    },
    {
      id: 3,
      time: "11:00",
    },
    {
      id: 4,
      time: "12:00",
    },
    {
      id: 5,
      time: "13:00",
    },
    {
      id: 6,
      time: "14:00",
    },
    {
      id: 7,
      time: "15:00",
    },
    {
      id: 8,
      time: "16:00",
    },
    {
      id: 9,
      time: "17:00",
    },
  ];
  let filtered_times = [];
  const [state, set_state] = useState(INITIAL_STATE);

  const post_appointment = async (appointment_data) => {
    let response = await post_appointment_create(appointment_data);
    console.log("response appointment", response);
  };
  const get_time = async (date) => {
    let response = await get_exist_time(date);
    console.log("context test times response", response.data.status);
    console.log("DBden dönen var olan saatler", response.data.data);
    if (response.data.status == "all times available") {
      console.log("Hiç saat yoksa", response.data);
      filtered_times = response.data.data;
      console.log("FILTER FILTER", filtered_times);
    } else {
      let response_times = response.data.data;
      console.log("response times", response_times[0].time);
      const test = [
        {
          id: "0",
          time: response_times[0].time,
        },
      ];
      console.log("tstdata", test);
      console.log("times", times);
      console.log("Saat varsa", response.data.data);
      for (let i = 0; i < times.length; i++) {
        if (times[i].time != response_times[0].time) {
          filtered_times.push(times[i]);
        }
      }
      console.log("filtered times", filtered_times);
    }
    set_state((prevState) => ({
      ...prevState,
      appointments_list: filtered_times,
    }));
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointment_context: state,
        post_appointment,
        get_time,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointmentContext() {
  const state = useContext(AppointmentContext);
  if (state == undefined) {
    throw new Error("PostsContext must be used within a Provider");
  }
  return useContext(AppointmentContext);
}
