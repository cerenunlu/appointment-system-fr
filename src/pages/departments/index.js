import { useEffect } from "react";
import { useDepartmentsContext } from "../../context";

function Departments() {
    const { get_departments_list, deparments_context } = useDepartmentsContext();
    const { departments_list } = deparments_context;
    console.log('departments_list', departments_list)

    const get_data = async () => {
        await get_departments_list()
    }

    useEffect(() => {
        get_data()
    }, [])

    return (
        <div>
            <h1>Departments</h1>
            {
                departments_list.map((item) => {
                    return (
                        <div>
                            <h2>title: {item.title}</h2>
                            <p>body: {item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Departments;