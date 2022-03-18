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
import { useEmployeesContext } from "../../context/";

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
  const { get_employees_by_departmentid, employees_context } =
    useEmployeesContext();
  const { employees_list } = employees_context;

  const { get_time, appointment_context } = useAppointmentContext();
  const { all_times_list } = appointment_context;
  let filtered_times = [];
  ///department///
  const get_departments_data = async () => {
    await get_departments_list();
  };
  useEffect(() => {
    get_departments_data();
  }, []);

  const [isDisabled, setDisabled] = useState(false);

  const [data, set_data] = useState({
    date: "",
    time: "",
    customer_id: "",
    department_id: "",
  });
  const onChangeDepartment = (value) => {
    console.log({ value });
    const department = {
      department_id: value,
    };
  
    get_employees_by_departmentid(department);
  };

  const [employee_id_value, setEmployeeId] = useState();
  const onChangeEmployee = (value) => {
    console.log({ value });
    setEmployeeId(value);
  };

  const [dateValue, onChange] = useState(new Date());

  const onChangeDate = (value) => {
    console.log({ value });
    onChange(value);

    if (value != null) {
      const date_value = {
        employee_id:employee_id_value,
        date: value,
      };
      console.log("aaaaa",date_value);
      get_time(date_value);
      date_value_data = date_value.date;
    }
  };

  const select_time = async (e) => {
    selected_times_data = all_times_list.find(
      (obj) => obj.id == e.target.value
    );
   
  };

  const { post_appointment } = useAppointmentContext();

  const createAppointment = async (e) => {
    const new_data = {
      date: dateValue,
      time: selected_times_data.time,
      employee_id: employee_id_value,
      customer_id: "0",
    };
    set_data(new_data);
   
    e.preventDefault();
    await post_appointment(new_data);
   
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
                {all_times_list.map((obje) => (
                  obje.disabled==true,
                  <Button
                    variant="contained"
                    color="success"
                    key={obje.id}
                    value={obje.id}
                    onClick={select_time}
                    disabled={obje.disabled}
                  >
                    {obje.time}
                  </Button>
                 
                ))}

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
      </Grid>
    </>
  );
}
export default CreateAppointment;
