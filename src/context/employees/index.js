import { createContext, useContext, useState } from "react";
import { get_employees_list_request } from "../../api/employee/employees";
import { post_employee_by_department_request } from "../../api/employee/employee_by_department_id";

const EmployeesContext = createContext();
export function EmployeesProvider({ children }) {
    let INITIAL_STATE = { // global states
        employees_list: [],
       
    };

    const [state, set_state] = useState(INITIAL_STATE);

    const get_employees_list = async () => {
        let response = await get_employees_list_request();
        set_state((prevState) => ({
            ...prevState,
            employees_list: response
        }))
    };


    const get_employees_by_departmentid = async (department_data) => {
        console.log("department da",department_data)
        let response = await post_employee_by_department_request(department_data);
        set_state((prevState) => ({
            ...prevState,
            employees_list: response
        }))
       
    };



    return (
        <EmployeesContext.Provider
            value={{ // export this object
                employees_context: state,
                get_employees_list,
                get_employees_by_departmentid
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