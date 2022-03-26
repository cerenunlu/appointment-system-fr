import { createContext, useContext, useState } from "react";
import { get_customers_list_request } from "../../api/customer/customer";
import { get_customer_by_id_request } from "../../api/customer/get_customer_by_id";

const CustomersContext = createContext();
export function CustomersProvider({ children }) {
  let INITIAL_STATE = {
    // global states
    customers_list: [],
  };

  const [state, set_state] = useState(INITIAL_STATE);

  const get_customers_list = async () => {
    let response = await get_customers_list_request();
  
    set_state((prevState) => ({
      ...prevState,
      customers_list: response,
    }));
  };
  const get_customer_by_id = async (id) => {
    let response= await get_customer_by_id_request(id);
  
    return response;
  };


  return (
    <CustomersContext.Provider
      value={{
        // export this object
        customers_context: state,
        get_customers_list,
        get_customer_by_id
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
