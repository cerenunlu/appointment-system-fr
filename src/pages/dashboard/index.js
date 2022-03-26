import React, { useState } from "react";
import Navbar from "../../components/Sidebar/navbar";
import EmployeeDashboard from "../../components/EmployeeDashboard/employee";
import CustomerDasboard from "../../components/CustomerDasboard/customer";
import AdminDashboard from "../../components/AdminDashboard/admin";
import Login from "../Login/login";
import { user_data_storage } from "../../helpers";



function Dashboard() {
  const { getData } = user_data_storage;
let header;
const current = getData();
if (current != null) {
  if (current.role == 1) {
    header = "Employee Dashboard";
  } else if (current.role == 2) {
    header = "Customer Dashboard";
  } else {
    header = "Admin Dashboard";
  }
}
  return (
    <>
      <div>
        <Navbar />
        <div className="content">
          <h1>{header}</h1>
          {(current.role == 1 && <EmployeeDashboard />) ||
            (current.role == 2 && <CustomerDasboard />) ||
            (current.role == 3 && <AdminDashboard />)}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
