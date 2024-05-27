import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
interface ListProp {
    label: string,
    options: {
        title?: '',
    },
    name: string,
    onChange: (name: string, value: string) => void
}
const ListBox = ({ label, options, name, onChange }: ListProp) => {

    const handleChange = (_: any, newValue: string) => {
        onChange(name, newValue)
    }
    return (
        <div>
            <label>{label}</label>

            <Autocomplete
                size='small'
                freeSolo
                options={options.map((option: { title: any; }) => option.title)}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </div>
    )
}

export default ListBox