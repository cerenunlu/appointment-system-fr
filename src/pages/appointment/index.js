import React, { useState } from "react";
import { useEffect } from "react";
import { Grid, Paper, Avatar, Typography, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import HailIcon from "@mui/icons-material/Hail";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { width } from "@mui/system";
import { useAuthContext } from "../../context/Auth";
import { token_storage } from "../../helpers/index";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/Sidebar/navbar";
import MultipleSelect from "../../components/MultipleSelect/index";

import { useDepartmentsContext } from "../../context";
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
  const avatarCustomerStyle = { backgroundColor: "#2196f3" };
  const textStyle = { margin: "20px 0" };
  const btnStyle = { margin: "8px 0" };
  const RegisterbtnStyle = { margin: "10px 8px", backgroundColor: "#bdbdbd" };
  const btnEmployeeStyle = { margin: "8px 0", height: "20vh" };
  const inputTextStyle = {
    margin: "10px 0",
    width: "350px",
    backgroundColor: "#9e9e9e",
  };


  
  //DEPARTMENTS CONST
  const { get_departments_list, departments_context } = useDepartmentsContext();
  const { departments_list } = departments_context;
  const department_select_header = "Department";
  const { get_employees_by_departmentid, employees_context } =
    useEmployeesContext();
  const { employees_list } = employees_context;
  ///department///
  const get_departments_data = async () => {
    await get_departments_list();
  };
  useEffect(() => {
    get_departments_data();
  }, []);
  const [data, setData] = useState("");

  const [department_data, departmentDataSet] = useState("");

  const employee_select_header = "Employees";

  const onChangeDepartment = (value) => {
    console.log({ value });
    get_employees_by_departmentid(value);
  };
  const onChangeEmployee = (value) => {
    console.log({value})

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
              <h2>Register</h2>
            </Grid>

            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <form>
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
