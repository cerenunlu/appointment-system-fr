import React from 'react'
import { useEffect } from "react";
import { useEmployeesContext } from "../../context/employees";
import Navbar from '../../components/Sidebar/navbar';
import Content from '../../components/Content/content'
import Table from '../../components/Table/table';

function Employees() {
  const { get_employees_list, employees_context } = useEmployeesContext();
  const { employees_list } = employees_context;
  console.log('employees_list', employees_list)
  const colNames = ['#', 'Name','Surname', 'Email', 'Role', 'Department','Setting'];

  const get_data = async () => {
    await get_employees_list()
  }

  useEffect(() => {
    get_data()
  }, [])
  console.log(employees_list);
  let employee_props=employees_list.map(employee=>{
    let props={
      id:employee.id,
      name:employee.name,
      surname:employee.surname,
      email:employee.email,
      role_id:employee.role_id,
      department_id:employee.department_id
    };
    return props;

  });
  console.log("props");
  console.log(employee_props);
  return (
    <>
      <Navbar />
      <div className="content">
        <div>
          <h1>Employees</h1>
        </div>

        {/* {
            <ul>
                {
                    departments_list.map((department, i) => (
                        <li key={i}>{department.name}</li>
                    ))
                }
            </ul>
        } */}
        <Table list={employee_props} colNames={colNames} />
      </div>

    </>
  )
}

export default Employees