import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function MultipleSelect({
    list,
    onChange,
    select_header,
}) {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
        onChange(event.target.value)
    };
   
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{select_header}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={handleChange}

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