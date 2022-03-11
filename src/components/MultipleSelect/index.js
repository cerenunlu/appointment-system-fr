import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function MultipleSelect({
    list,
    select_header,
   childToParent
}) {

    const onTrigger = () => {
       childToParent(department)
    }
    const [department, setDepartment] = React.useState('');

    const handleChange = (event) => {
        setDepartment(event.target.value)


    };
    console.log(department)
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{select_header}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={department}
                    label="Age"
                    onChange={handleChange}
                    onClick={onTrigger}

                >
                    {list.map((obje) => (
                        <MenuItem
                            key={obje.id}
                            value={obje.id}

                        >
                            {obje.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}