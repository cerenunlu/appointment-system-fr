import { createContext, useContext, useState } from "react";
import { get_employees_list_request } from "../../api/employee/employees";
import { post_employee_by_department_request } from "../../api/employee/employee_by_department_id";
import { post_new_employee_request } from "../../api/employee/create_employee";
import { get_employee_by_id_request } from "../../api/employee/employee_by_id";

const EmployeesContext = createContext();
export function EmployeesProvider({ children }) {
  let INITIAL_STATE = {
    // global states
    employees_list: [],
    new_employee:[],
  };

  const [state, set_state] = useState(INITIAL_STATE);

  const get_employees_list = async () => {
    let response = await get_employees_list_request();
    set_state((prevState) => ({
      ...prevState,
      employees_list: response,
    }));
  };

  const get_employees_by_departmentid = async (department_id) => {
    let response = await post_employee_by_department_request(department_id);
    set_state((prevState) => ({
      ...prevState,
      employees_list: response,
    }));
  };
  const get_employee_by_id = async (id) => {
    let response = await get_employee_by_id_request(id);
    return response;
  };
  const post_new_employee = async (data) => {
    let response= await post_new_employee_request(data);
    return response;
  };

  return (
    <EmployeesContext.Provider
      value={{
        // export this object
        employees_context: state,
        get_employees_list,
        get_employees_by_departmentid,
        get_employee_by_id,
        post_new_employee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}
export function useEmployeesContext() {
  const state = useContext(EmployeesContext);
  if (state === undefined) {
    throw new Error("PostsContext must be used within a PostsProvider");
  }
  return useContext(EmployeesContext);
}
