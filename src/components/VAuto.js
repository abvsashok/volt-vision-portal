import { Autocomplete, Chip, TextField } from "../../node_modules/@mui/material/index";
import VText from "./VText";


const VAuto = ({ defaultValue, options, label, ...others }) => {

    return <>
        <Autocomplete
            multiple
            id="tags-filled"
            options={options ?? []}
            defaultValue={defaultValue ?? []}
            freeSolo
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="filled" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <VText
                    {...params}
                    // variant="outlined"
                    label={label}
                    placeholder={label}
                />
            )}
            {...others}
        /></>
}

export default VAuto;