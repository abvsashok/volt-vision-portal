import VButton from "components/VButton";
import { Save, SaveAltOutlined, SaveAltRounded, SaveRounded } from "../../../node_modules/@mui/icons-material/index";
import { Grid, IconButton } from "../../../node_modules/@mui/material/index";
import TextField from '@mui/material/TextField'
import VText from "components/VText";


const EditRow = ({
    data
}) => {
    // console.log(data)
    return <>
        <Grid sx={{
            minWidth: 500,
            gap: 2,
            display: 'flex', justifyContent: "center",
            alignItems: "center"
        }}>
            <VText
                autoFocus
                required
                id="note"
                name="column"
                defaultValue={data?.value}
                label={`${data?.colDef?.headerName}`}
                type="text"
                sx={{
                    fontWeight:900,
                    fontSize:30
                }}
                fullWidth
                variant="filled"
            />
            <VButton variant="contained" startIcon={<SaveRounded />} > Save </VButton>
        </Grid>
    </>
}

export default EditRow;