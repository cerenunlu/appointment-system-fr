import React from 'react'
import *as FaIcons from "react-icons/fa";
import *as AiIcons from "react-icons/ai";
import *as IoIcons from "react-icons/io";
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData=[
    {
        title: "Dashboard",
        path:'/',
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
        title: "Employees",
        path:'/employees',
        icon:<FaIcons.FaPeopleArrows/>,
        cName:'nav-text'
    },
    {
         title: "Departments",
        path:'/departments',
        icon:<FaIcons.FaPeopleArrows/>,
        cName:'nav-text'
     },
    {
        title: "Customers",
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
    {
        title: "Logout",
        path:'/sign-in',
        icon:<LogoutIcon/>,
        cName:'nav-text'
    },
]