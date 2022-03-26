import React, { useState, useEffect } from "react";
import { useAppointmentContext } from "../../context";
import { user_data_storage } from "../../helpers";
import Table from "../../components/Table/table";
import Button from "@mui/material/Button";
function CustomerDashboard() {
  const { getData } = user_data_storage;
  const current = getData();
  
  const { get_appointment_by_customer_id, appointment_context } =
    useAppointmentContext();
  const { appointments_by_customer_id } = appointment_context;

  let header;
  let colNames;

  const get_appointments_list = async () => {
    
    await get_appointment_by_customer_id(current.id);
   console.log("dsdk",appointments_by_customer_id);
  };

  useEffect(() => {
    get_appointments_list();
  }, []);

  if (appointments_by_customer_id != null) {
    colNames = ["#", "Date", "Time", "Customer", "employee"];
  } else {
    header = "You have not any appointment";
  }
  const create_new_appointment = async () => {
    window.location.href = "/create-appointment";
  };
  return (
    <>
      {appointments_by_customer_id && (
        <Table list={appointments_by_customer_id} colNames={colNames} />
      )}
      <div>
        <h1>{header}</h1>
        <Button onClick={create_new_appointment} variant="contained">
          Create New Appointment
        </Button>
      </div>
    </>
  );
}

export default CustomerDashboard;
