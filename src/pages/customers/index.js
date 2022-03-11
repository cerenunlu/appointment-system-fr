import React from 'react'
import { useEffect } from "react";
import { useCustomersContext } from "../../context/customers";
import Navbar from '../../components/Sidebar/navbar';
import Content from '../../components/Content/content'
import Table from '../../components/Table/table';

function Employees() {
    const { get_customers_list, customers_context } = useCustomersContext();
    const { customers_list } = customers_context;
    console.log('customers_list', customers_list)
    const colNames = ['#', 'Name', 'Surname', 'Email', 'Date', 'Employee', 'Setting'];

    const get_data = async () => {
        await get_customers_list()
    }

    useEffect(() => {
        get_data()
    }, [])

    console.log(customers_list);
    let customer_props = customers_list.map(customer => {
        let props = {
            id: customer.id,
            name: customer.name,
            surname: customer.surname,
            email: customer.email,
            date: customer.appointmentDate,
            employee: customer.employee_id
        };
        return props;

    });
    console.log("props");
    console.log(customer_props);
    return (
        <>
            <Navbar />
            <div className="content">
                <div>
                    <h1>Customers</h1>
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
                <Table list={customer_props} colNames={colNames} />
            </div>

        </>
    )
}

export default Employees