import React, { useState } from 'react'
import *as FaIcons from "react-icons/fa";
import *as AiIcons from "react-icons/ai";
import { SidebarData } from '../Sidebar/sidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';
import *as GiIcons from "react-icons/gi";
import { Link } from 'react-router-dom';
function Navbar() {
    const [sidebar, setSidebar] = useState(true);



    return (
        <>
            <IconContext.Provider value={{ color: 'orange' }}>
                <div className='navbar'>

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                       
                        <li className="navbar-toggle">

                            <div className='menu-bars'>
                                <h4><i> <GiIcons.GiBee /></i>BIRTAKIM</h4>
                            </div>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
