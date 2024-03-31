import { TextField } from "../../node_modules/@mui/material/index";


const VText = ({ ...others }) => {

    return <TextField
        variant="standard"
        InputProps={{
            style: { fontSize: '18px' } // Adjust the font size as needed
        }}
        {...others}
    />
}
export default VText;