import { Autocomplete, Chip, TextField } from "../../node_modules/@mui/material/index";
import VText from "./VText";


const VAuto = ({ defaultValue, options, label, name, sx, ...others }) => {

    return <>
        <Autocomplete
            multiple
            id={`tags-filled-${name}`}
            options={options ?? []}
            defaultValue={defaultValue ?? []}
            freeSolo
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip key={index} variant="filled" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <VText
                    {...params}
                    fullwidth
                    fullWidth
                    variant="outlined"
                    label={label}
                    placeholder={label}
                />
            )}
            sx={{ pt: 0.5, ...sx }}
            name={name}
            {...others}
        /></>
}

export default VAuto;