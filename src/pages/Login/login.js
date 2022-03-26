import React, { useState } from "react";
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

function Login() {
  const customerPaperStyle = {
    padding: 80,
    height: "70vh",
    width: 400,
    margin: "60px auto",
    backgroundColor: "#607d8b",
    
  };
  const employeePaperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "40px auto",
    backgroundColor: "#212121",
  };
  const avatarEmployeeStyle = { backgroundColor: "#64b5f6" };
  const main = { backgroundColor: "#212121" ,height: "100vh"};
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
  const { post_login, auth_context } = useAuthContext();

  const [data, set_data] = useState({
    email: "",
    password: "",
    loggedIn: false,
  });
  function handle(e) {
    const new_data = { ...data };
    new_data[e.target.id] = e.target.value;
    set_data(new_data);
  }

  const on_login = async (e) => {
    e.preventDefault();
    const test = await post_login(data);
  };
  const register_customer = async (e) => {};

  return (
    <>
      <div style={main}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid item xs={12}>
            <Paper elevation={10} style={customerPaperStyle}>
              <Grid align="center">
                <Avatar style={avatarEmployeeStyle}>
                  <EmojiPeopleIcon />
                </Avatar>
                <h2>Sign in </h2>
              </Grid>

              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <form onSubmit={(e) => on_login(e)}>
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
                  <Button
                    variant="contained"
                    type="submit"
                    value="Submit"
                    fullWidth
                  >
                    Login
                  </Button>
                </form>
                <Link href="/customer-register">SIGN UP</Link>
              </Box>

              <Typography style={textStyle}>
                <Link href="#">Forgot Password</Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Login;
