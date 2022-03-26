import React from 'react'
import *as FaIcons from "react-icons/fa";
import *as AiIcons from "react-icons/ai";
import *as IoIcons from "react-icons/io";
import LogoutIcon from '@mui/icons-material/Logout';
import { user_data_storage ,token_storage } from "../../helpers";
const { delete_user_data } = user_data_storage;
const { delete_token_data } = token_storage;

const logout=()=>{
  
       delete_user_data();
       delete_token_data()
     
}


const sidebarDataEmployee=[
    {
        title: "Dashboard",
        path:'/dashboard',
        icon:<AiIcons.AiFillDashboard/>,
        cName:'nav-text'
    },
    {
        title: "Meetings",
        path:'/meetings',
        icon:<FaIcons.FaClipboard/>,
        cName:'nav-text'
    },
    {
        title: "My Customers",
        path:'/customers',
        icon:<IoIcons.IoIosPeople/>,
        cName:'nav-text'
    },
    {
        title: "Settings",
        path:'/settings',
        icon:<AiIcons.AiTwotoneSetting/>,
        cName:'nav-text'
    },
    
]
export default sidebarDataEmployee;