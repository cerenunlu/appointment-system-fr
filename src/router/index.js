import React, { useEffect, useState } from "react";
import { token_storage, user_data_storage } from "../helpers";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Departments from "../pages/departments";
import Dashboard from "../pages/dashboard";
import Employees from "../pages/employees";
import Customers from "../pages/customers";
import Login from "../pages/Login/login";
import CustomerRegister from "../pages/customerRegister/index";
import CreateAppointment from "../pages/appointment/index";
import CreateEmployee from "../pages/createEmployee";
import ErrorPage from "../pages/error/index";

const { get_access_token } = token_storage;
const { getData } = user_data_storage;
export default function RouterComp() {
  const LOCATION = useLocation();
  const token = get_access_token();
  const user_data = getData();
  const router = useNavigate();
  const path_name = LOCATION.pathname;

  const data = {
    1: ["/departments", "/employees", "/customers", "/dashboard", "/"],
    2: ["/create-appointment", "/dashboard", "/customer-register"],
    3: ["/customers", "/dashboard", "/","/create-employee"],
  };

  useEffect(() => {
    if ((!token && LOCATION.pathname !== "/") || user_data === null) {
      if (LOCATION.pathname == "/customer-register") {
        router(`${path_name}`);
      } else {
        router("/");
      }
    } else if (token) {
      if (data[user_data.role].includes(path_name)) {
        if (path_name == "/") {
          router("/");
        } else {
          router(`${path_name}`);
        }
      } else {
        router("/error-page");
      }
    }
  }, [token]);

  return (
    <Routes>
      {/* <Route
                path="*"
                element={<Navigate to="/posts" />} // auto redirects
            /> */}

      <Route path="/departments" element={<Departments />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {<Route path="/" element={<Login />} />}
      <Route path="/customer-register" element={<CustomerRegister />} />
      <Route path="/create-appointment" element={<CreateAppointment />} />
      <Route path="/error-page" element={<ErrorPage />} />
      <Route path="/create-employee" element={<CreateEmployee />} />
    </Routes>
  );
}
