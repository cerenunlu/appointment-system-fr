import { useEffect } from "react";
import { useDepartmentsContext } from "../../context";
import { useRolesContext } from "../../context";
import { useEmployeesContext } from "../../context";
import Navbar from "../../components/Sidebar/navbar";
import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MultipleSelect from "../../components/MultipleSelect/index";
import SuccessModal from "../../components/Modal/SuccessModal";


function CreateEmployee() {
  const { get_departments_list, departments_context } = useDepartmentsContext();
  const { departments_list } = departments_context;

  const { get_roles_list, roles_context } = useRolesContext();
  const { roles_list } = roles_context;

  const { post_new_employee } = useEmployeesContext();
  const customerPaperStyle = {
    padding: 20,
    height: "70vh",
    width: 600,
    margin: "40px",
  };

  const inputTextStyle = {
    margin: "10px 0",
    width: "500px",
  };

  const [data, set_data] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirm_password: "",
    department_id: "",
    role_id: "",
  });
  const [employee, set_employee] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    department_id: "",
    role_id: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [department, set_department] = useState(null);
  const [role, set_role] = useState(null);

  const get_departments_roles_data = async () => {
    await get_departments_list();
    await get_roles_list();
  };
  useEffect(() => {
    get_departments_roles_data();
  }, []);

  const onSelectDepartment = (value) => {
    const department = {
      department_id: value,
    };
    set_department(department);
    console.log(department.department_id);
  };
  const onSelectRole = (value) => {
    const role = {
      role_id: value,
    };
    set_role(role);
  };

  function handle(e) {
    const new_data = { ...data };
    new_data[e.target.id] = e.target.value;
    console.log();
    set_data(new_data);
  }

  const create_employee = async (e) => {
    e.preventDefault();

    if (data.password == data.confirm_password) {
      const new_employee_data = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        department_id: department.department_id,
        role_id: role.role_id,
      };
      set_employee(new_employee_data);
      let response_new_employee = await post_new_employee(new_employee_data);
      handleOpen();
    } else {
      console.log("try again");
    }
  };
  return (
    <>
      <Navbar />
      <div className="content">
        <Grid item xs={12}>
          <Paper elevation={10} style={customerPaperStyle}>
            <Grid align="center">
              <h2>Create Employee</h2>
            </Grid>

            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <form onSubmit={(e) => create_employee(e)}>
                <TextField
                  style={inputTextStyle}
                  variant="outlined"
                  label="Name"
                  onChange={(e) => handle(e)}
                  value={data.name}
                  type="text"
                  id="name"
                />

                <br />
                <TextField
                  style={inputTextStyle}
                  variant="outlined"
                  label="Surname"
                  onChange={(e) => handle(e)}
                  value={data.surname}
                  type="text"
                  id="surname"
                />

                <br />

                <TextField
                  style={inputTextStyle}
                  variant="outlined"
                  label="Email"
                  onChange={(e) => handle(e)}
                  value={data.email}
                  type="text"
                  id="email"
                />
                <br />
                <MultipleSelect
                  onChange={onSelectDepartment}
                  list={departments_list}
                  select_header="Select Department"
                />
                <br />
                <MultipleSelect
                  onChange={onSelectRole}
                  list={roles_list}
                  select_header="Select Role"
                />
                <br />

                <TextField
                  style={inputTextStyle}
                  variant="outlined"
                  label="Password"
                  onChange={(e) => handle(e)}
                  value={data.password}
                  type="password"
                  id="password"
                />

                <br />
                <TextField
                  style={inputTextStyle}
                  variant="outlined"
                  label="Confirm Password"
                  onChange={(e) => handle(e)}
                  value={data.confirm_password}
                  type="password"
                  id="confirm_password"
                />

                <br />
                <Button
                  variant="contained"
                  type="submit"
                  value="Submit"
                  fullWidth
                >
                  Create{" "}
                </Button>
              </form>
            </Box>
          </Paper>
        </Grid>
        <SuccessModal
          openModal={open}
          closeModal={handleClose}
          info={employee}
          header="New Employee"
        />
      </div>
    </>
  );
}

export default CreateEmployee;
