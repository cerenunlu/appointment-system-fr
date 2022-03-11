import React from 'react'
import *as FaIcons from "react-icons/fa";
import *as AiIcons from "react-icons/ai";
import *as IoIcons from "react-icons/io";
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData=[
    
    {
        title: "Create Appointment",
        path:'/create-appointment',
        icon:<FaIcons.FaClipboard/>,
        cName:'nav-text'
    },
    {
        title: "Us",
        path:'/us',
        icon:<FaIcons.FaPeopleArrows/>,
        cName:'nav-text'
    },
    {
         title: "Our Departments",
        path:'/our-departments',
        icon:<FaIcons.FaPeopleArrows/>,
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