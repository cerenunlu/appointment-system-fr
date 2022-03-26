import { createContext, useContext, useState } from "react";
import { get_roles_list_request } from "../../api/role/get_roles";

const RolesContext=createContext();

export function RolesProvider({children}){
    let INITIAL_STATE={
        roles_list:[],
    };

    const [state,set_state]=useState(INITIAL_STATE);

    const get_roles_list=async()=>{
        let response=await get_roles_list_request();
        set_state((prevState)=>({
            ...prevState,
            roles_list:response
        }))
    };

    return (
        <RolesContext.Provider
        value={{
            roles_context:state,
            get_roles_list
        }}

        >
          {children}
        </RolesContext.Provider>
    )
}

export function useRolesContext(){
    const state=useState(RolesContext);
    if(state==undefined){
        throw new Error("RoleContext must be used within a RoleProvider");
    }
    return useContext(RolesContext);
}