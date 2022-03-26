import React, { useState, useEffect } from "react";
import { user_data_storage } from "../../helpers";
import { useAppointmentContext } from "../../context";
import Table from "../../components/Table/table";
import List from "../../components/List/list";

function AdminDashboard() {
  const { getData } = user_data_storage;
  const current = getData();
  const {
    get_appointment_by_employee_id,
    get_appointment_all,
    appointment_context,
  } = useAppointmentContext();

  const { appointments_by_id, all_appointments } = appointment_context;

  let header1;
  let header2;
  let colNames1;
  let colNames2;

  const get_data = async () => {
    await get_appointment_all();
    await get_appointment_by_employee_id(current.id);
  };

  useEffect(() => {
    get_data();
  }, []);

  if (appointments_by_id != null) {
    colNames1 = ["#", "Date", "Time", "Customer", "employee"];
  } else {
    header1 = "You have not any appointment";
  }
  if (all_appointments != null) {
    colNames2 = ["#", "Date", "Time", "Customer", "employee"];
  } else {
    header2 = "not any appointment";
  }

  return (
    <>
      <h1>My Meetings</h1>
      {appointments_by_id && (
        <List list={appointments_by_id} />
      )}
      <div>
        <h1>{header1}</h1>
      </div>
      <h1>All Meetings</h1>
      {all_appointments && (
        // <Table list={all_appointments} colNames={colNames2} />
        <List list={all_appointments} />
      )}
      <div>
        <h1>{header2}</h1>
      </div>
    </>
  );
}

export default AdminDashboard;
