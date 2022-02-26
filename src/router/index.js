import React from "react";
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Employees from "../pages/employee";

export default function RouterComp() {
   
    return (
        <Routes>
            {/* <Route
                path="*"
                element={<Navigate to="/posts" />} // auto redirects
            /> */}
            <Route path="/departments" element={<Departments />} />
           
        </Routes>
    )
}