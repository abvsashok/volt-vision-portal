import { Button } from "@mui/material";


const VButton = ({ label, icon, className, loading, children, disabled, sx, ...others }) => {

    return <><Button variant="outlined" disabled={loading || disabled}  {...others} sx={{ fontWeight: 800, ...sx }} >
        {children}
    </Button></>
}

export default VButton;