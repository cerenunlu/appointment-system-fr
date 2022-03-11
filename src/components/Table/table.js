import React, { useState } from "react"
import Button from '@mui/material/Button';
const btnStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "5px 10px",
}

function Table({
    list,
    colNames,
    pageNum = 0,
    pageSize = 10,
    width = "auto",
    height = "auto",
}) {
    const [page, setPage] = useState(pageNum)


    const onBack = () => {
        setPage(page - 1 > -1 ? page - 1 : page)
    }

    const onNext = () => {
        setPage(page + 1 < list.length / pageSize ? page + 1 : page)
    }

    return (
        <div style={{ width: "70%", boxShadow: "3px 6px 3px #ccc" }}>
            {list.length > 0 && (
                <table
                    cellSpacing="0"
                    style={{ width: "100%", height: height, padding: "5px 10px" }}
                >
                    <thead style={{ backgroundColor: "black", color: "white" }}>
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>{headerItem.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                        {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>{value}</td>
                                ))}
                                <td><Button variant="contained" size="small">Edit</Button>
                                    <Button variant="contained" color="error" size="small">Del</Button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}
        </div>
    )
}

export default Table