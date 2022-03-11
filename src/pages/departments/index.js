import { useEffect } from "react";
import { useDepartmentsContext } from "../../context";
import Navbar from '../../components/Sidebar/navbar';
import Content from '../../components/Content/content'
import Table from '../../components/Table/table';


function Departments() {
    const { get_departments_list, departments_context } = useDepartmentsContext();
    const { departments_list } = departments_context;
    console.log('departments_list', departments_list)
    const colNames = ['#', 'Name', 'Setting'];

    const get_data = async () => {
        await get_departments_list()
    }

    useEffect(() => {
        get_data()
    }, [])

    return (
        <>
            <Navbar />
            <div className="content">
                <div>
                    <h1>Departments</h1>
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
                <Table list={departments_list} colNames={colNames} />
            </div>

        </>
    )
}

export default Departments;