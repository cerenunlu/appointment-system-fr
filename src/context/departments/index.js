import { createContext, useContext, useState } from "react";
import { get_departments_list_request } from "../../api/department/departments";

const DepartmentsContext = createContext();
export function DepartmentsProvider({ children }) {
    let INITIAL_STATE = { // global states
        departments_list: [],
    };

    const [state, set_state] = useState(INITIAL_STATE);

    const get_departments_list = async () => {
        console.log("test context")
        let response = await get_departments_list_request();
        console.log('response', response)
        set_state((prevState) => ({
            ...prevState,
            departments_list: response
        }))
    };

    return (
        <DepartmentsContext.Provider
            value={{ // export this object
                departments_context: state,
                get_departments_list
            }}
        >
            {children}
        </DepartmentsContext.Provider>
    );
}
export function useDepartmentsContext() {
    const state = useContext(DepartmentsContext);
    if (state === undefined) {
        throw new Error("PostsContext must be used within a PostsProvider");
    }
    return useContext(DepartmentsContext);
}