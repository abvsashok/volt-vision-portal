import { Autocomplete, Grid, LinearProgress, TextField, Typography } from "../../../node_modules/@mui/material/index";


const preMap = ["Data_Point", "Test_Time", "DateTime", "Step_Time", "Step_Index", "Cycle_Index", "Current", "Voltage", "Charge_Capacity", "Discharge_Capacity",
    "Charge_Energy", "Discharge_Energy", "dV_dt", "Internal_Resistance", "Temperature"];

const ColMap = () => {

    return <>
        <Grid>
            {preMap?.map((key, i) => {
                return <Grid container sx={{ mb: 2 }}>
                    <Grid item xs={0.5}>
                        <Typography variant="h4"></Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h4">{i + 1}. {key}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={[1, 2, 3, 4]}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="" />}
                        />
                    </Grid>

                </Grid>
            })}
        </Grid>
    </>


}

export default ColMap;