import React, { useEffect } from "react";
import { token_storage } from "../helpers";

import {
    Routes,
    Route,
    Navigate,
    useLocation,
    useNavigate,
} from "react-router-dom";
import Departments from "../pages/departments";
import Admindashboard from "../pages/admindashboard";
import Employees from "../pages/employees";
import Customers from "../pages/customers";
import Login from "../pages/Login/login";
import CustomerRegister from "../pages/customerRegister/index";
import CreateAppointment from "../pages/appointment/index";

const { get_access_token } = token_storage;
export default function RouterComp() {
    const LOCATION = useLocation()
    const token = get_access_token()
    const router = useNavigate()
    const path_name=Location.pathname
    useEffect(() => {
        if (!token && LOCATION.pathname!=='/sign_in'){
            router('sign-in')
        }else if(token && LOCATION.pathname==`/${path_name}`){
            router(`/${path_name}`)
            
        }
        
   },[token])



    return (
        <Routes>
            {/* <Route
                path="*"
                element={<Navigate to="/posts" />} // auto redirects
            /> */}

            <Route path="/departments" element={<Departments />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/admin-dash" element={<Admindashboard />} />
            {<Route path="/sign-in" element={<Login />} />}
            <Route path="/customer-register" element={<CustomerRegister />} />
            <Route path="/create-appointment" element={<CreateAppointment />} />

        </Routes>
    )
}