import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./navbar.css";
import { IconContext } from "react-icons";
import * as GiIcons from "react-icons/gi";
import { Link } from "react-router-dom";
import { user_data_storage } from "../../helpers";
import sidebarDataAdmin from "../../components/Sidebar/sidebarDataAdmin";
import sidebarDataEmployee from "../../components/Sidebar/sidebarDataEmployee";
import sidebarDataCustomer from "../../components/Sidebar/sidebarDataCustomer";
import Button from "@mui/material/Button";
import { token_storage } from "../../helpers";

const { delete_user_data } = user_data_storage;
const { delete_token_data } = token_storage;

function Navbar() {
  const { getData } = user_data_storage;
  let sidebar_data = [];
  const current = getData();
 

  if (current.role == 1) {
    sidebar_data = sidebarDataEmployee;
  } else if (current.role == 2) {
    sidebar_data = sidebarDataCustomer;
  } else if (current.role == 3) {
    sidebar_data = sidebarDataAdmin;
  }
 
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: "orange" }}>
        <div className="navbar"></div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className="menu-bars">
                <h4>
                  <i>
                    {" "}
                    <GiIcons.GiBee />
                  </i>
                  BIRTAKIM
                </h4>
              </div>
            </li>
            {sidebar_data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <Button onClick={logout} variant="outlined" color="error">
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
