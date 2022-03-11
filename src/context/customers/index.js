import { createContext, useContext, useState } from "react";
import { get_customers_list_request } from "../../api/customer/customer";

const CustomersContext = createContext();
export function CustomersProvider({ children }) {
    let INITIAL_STATE = { // global states
        customers_list: [],
    };

    const [state, set_state] = useState(INITIAL_STATE);

    const get_customers_list = async () => {
        let response = await get_customers_list_request();
        console.log('response', response)
        set_state((prevState) => ({
            ...prevState,
            customers_list: response
        }))
    };

    return (
        <CustomersContext.Provider
            value={{ // export this object
                customers_context: state,
                get_customers_list
            }}
        >
            {children}
        </CustomersContext.Provider>
    );
}
export function useCustomersContext() {
    const state = useContext(CustomersContext);
    if (state === undefined) {
        throw new Error("PostsContext must be used within a PostsProvider");
    }
    return useContext(CustomersContext);
}