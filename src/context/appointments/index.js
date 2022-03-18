import { createContext, useContext, useState } from "react";
import { post_appointment_create } from "../../api/appointment/appointment_by_customer_id";
import { get_exist_time } from "../../api/appointment/available_date";
const AppointmentContext = createContext({});

export function AppointmentProvider({ children }) {
  let INITIAL_STATE = {
    appointments_list: [],
    all_times_list: [],
  };
  let times = [
    {
      id: 1,
      time: "09:00",
      selected: false,
      disabled: false,
    },
    {
      id: 2,
      time: "10:00",
      selected: false,
      disabled: false,
    },
    {
      id: 3,
      time: "11:00",
      selected: false,
      disabled: false,
    },
    {
      id: 4,
      time: "12:00",
      selected: false,
      disabled: false,
    },
    {
      id: 5,
      time: "13:00",
      selected: false,
      disabled: false,
    },
    {
      id: 6,
      time: "14:00",
      selected: false,
      disabled: false,
    },
    {
      id: 7,
      time: "15:00",
      selected: false,
      disabled: false,
    },
    {
      id: 8,
      time: "16:00",
      selected: false,
      disabled: false,
    },
    {
      id: 9,
      time: "17:00",
      selected: false,
      disabled: false,
    },
  ];
  let filtered_times = [];
  const [state, set_state] = useState(INITIAL_STATE);

  const post_appointment = async (appointment_data) => {
    let response = await post_appointment_create(appointment_data);
  };
  const get_time = async (date) => {
    let response = await get_exist_time(date);

    if (response.data.status == "all times available") {
      filtered_times = times;
    } else {
      let response_times = response.data.data;

      const test = [
        {
          id: "0",
          time: response_times[0].time,
        },
      ];

      for (let i = 0; i < times.length; i++) {
        for (let k = 0; k < response_times.length; k++) {
          if (times[i].time == response_times[k].time) {
            times[i].selected = true;
          }
        }
      }

      for (let j = 0; j < times.length; j++) {
        if (times[j].selected != true) {
          filtered_times.push(times[j]);
        }
      }
    }
    set_state((prevState) => ({
      ...prevState,
      all_times_list: filtered_times,
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
