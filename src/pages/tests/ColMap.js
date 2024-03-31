import { Autocomplete, Grid, LinearProgress, TextField, Typography } from "../../../node_modules/@mui/material/index";


const preMap = ["Data_Point", "Test_Time", "DateTime", "Step_Time", "Step_Index", "Cycle_Index", "Current", "Voltage", "Charge_Capacity", "Discharge_Capacity",
    "Charge_Energy", "Discharge_Energy", "dV_dt", "Internal_Resistance", "Temperature"];

const ColMap = ({
    rightCols,
    handleChangeTags
}) => {

    return <>
        <Grid sx={{ backgroundColor: 'aliceblue', p: 1 }} >
            <h2>Columns Mapping</h2>
            {preMap?.map((key, i) => {
                return <Grid container sx={{ mb: 2 }} key={i}>
                    <Grid item xs={6}>
                        <Typography variant="h4">{i + 1}. {key}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            fullWidth
                            disablePortal
                            id="combo-box-demo"
                            options={rightCols || []}
                            onChange={(_, opt) => {
                                handleChangeTags({ [key]: opt })
                            }}
                            renderInput={(params) => <TextField {...params} label="" />}
                        />
                    </Grid>

                </Grid>
            })}
        </Grid>
    </>


}

export default ColMap;