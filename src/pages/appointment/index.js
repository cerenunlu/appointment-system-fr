import React, { useState } from "react";
import { useEffect } from "react";
import { Grid, Paper, Avatar } from "@mui/material";
import DatePicker from "react-date-picker";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Navbar from "../../components/Sidebar/navbar";
import MultipleSelect from "../../components/MultipleSelect/index";
import { useAppointmentContext, useDepartmentsContext } from "../../context";
import { useCustomersContext } from "../../context";
import { useEmployeesContext } from "../../context/";
import SuccessModal from "../../components/Modal/SuccessModal";

function CreateAppointment() {
  //STYLE//
  const customerPaperStyle = {
    padding: 20,
    height: "70vh",
    width: 600,
    margin: "40px auto",
    backgroundColor: "#eeeeee",
  };
  const avatarEmployeeStyle = { backgroundColor: "#64b5f6" };

  //TIME//

  //DEPARTMENTS CONST
  let selected_times_data = [];
  let date_value_data = "";
  const employee_select_header = "Employees";
  const { get_departments_list, departments_context } = useDepartmentsContext();
  const { departments_list } = departments_context;
  const department_select_header = "Department";
  const {
    get_employees_by_departmentid,
    get_employee_by_id,
    employees_context,
  } = useEmployeesContext();
  const { employees_list } = employees_context;

  const { get_time, appointment_context } = useAppointmentContext();
  const { all_times_list } = appointment_context;
  const { post_appointment } = useAppointmentContext();
  const { post_response } = appointment_context;
  const { get_customer_by_id } = useCustomersContext();

  const [select_time_index, set_select_time_index] = useState(null);

  ///department///
  const get_departments_data = async () => {
    await get_departments_list();
  };
  useEffect(() => {
    get_departments_data();
  }, []);

  const [data, set_data] = useState({
    date: "",
    time: "",
    customer_id: "",
    department_id: "",
  });
  const [data_appointment, setDataAppointment] = useState({
    date: "",
    time: "",
    customer_name: "",
    employee_name: "",
  });

  const onChangeDepartment = (value) => {
    const department = {
      department_id: value,
    };

    get_employees_by_departmentid(department);
  };

  const [employee_id_value, setEmployeeId] = useState();
  const onChangeEmployee = (value) => {
    setEmployeeId(value);
  };

  const [dateValue, onChange] = useState(new Date());
  const [timeValue, set_timeValue] = useState();
  const onChangeDate = (value) => {
    onChange(value);

    if (value != null) {
      const date_value = {
        employee_id: employee_id_value,
        date: value,
      };
      get_time(date_value);
      date_value_data = date_value.date;
    }
  };

  const select_time = async (item, index) => {
    console.log(index);
    set_select_time_index(index);
    console.log("select time", select_time_index);

    selected_times_data = all_times_list.find((obj) => obj.id == item.id);
    console.log(selected_times_data.time);
    set_timeValue(selected_times_data.time);
    console.log("jdj", timeValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createAppointment = async (e) => {
    const new_data = {
      date: dateValue,
      time: timeValue,
      employee_id: employee_id_value,
      customer_id: "0",
    };
    set_data(new_data);

    e.preventDefault();
    const post = await post_appointment(new_data);
    if (post.id != null) {
      const employee_info = await get_employee_by_id(new_data.employee_id);
      const customer_info = await get_customer_by_id(post.customer_id);
      const created_data = {
        date: dateValue,
        time: selected_times_data.time,
        employee_name: employee_info.data.name,
        customer_name: customer_info.data.name,
      };
      setDataAppointment(created_data);

      handleOpen();
    }
  };
  ////////////
  return (
    <>
      <Navbar />

      <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid item xs={12}>
          <Paper elevation={10} style={customerPaperStyle}>
            <Grid align="center">
              <Avatar style={avatarEmployeeStyle}>
                <EmojiPeopleIcon />
              </Avatar>
              <h2>CREATE </h2>
            </Grid>

            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <form onSubmit={(e) => createAppointment(e)}>
                <MultipleSelect
                  onChange={onChangeDepartment}
                  list={departments_list}
                  select_header={department_select_header}
                />
                <br />
                <MultipleSelect
                  onChange={onChangeEmployee}
                  list={employees_list}
                  select_header={employee_select_header}
                />
                <br />
                <label>Choose Date</label>
                <br />
                <DatePicker onChange={onChangeDate} value={dateValue} />
                <br />
                <br />
                {all_times_list.map(
                  (item, index) => (
                    item.disabled == true,
                    (
                      <Button
                        variant="contained"
                        color={
                          index === select_time_index ? "success" : "error"
                        }
                        key={item.id}
                        value={item.id}
                        onClick={() => select_time(item, index)}
                        disabled={item.disabled}
                      >
                        {item.time}
                      </Button>
                    )
                  )
                )}

                <br />
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  value="Submit"
                  fullWidth
                >
                  Create
                </Button>
              </form>
            </Box>
          </Paper>
        </Grid>
        <SuccessModal
          openModal={open}
          closeModal={handleClose}
          info={data_appointment}
          header="Appointment"
        />
      </Grid>
    </>
  );
}
export default CreateAppointment;
