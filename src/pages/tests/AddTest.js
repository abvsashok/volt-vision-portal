import MainCard from 'components/MainCard';
import { Autocomplete, Container, Grid, TextField } from '../../../node_modules/@mui/material/index';
import VAuto from 'components/VAuto';
import VText from 'components/VText';

const AddTest = () => {
    return <>
        {/* <Container minWidth="lg"  sx={{ minWidth: '60vw' }} > */}
        <MainCard>
            <Grid container
                spacing={2}
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start" >
                <Grid item xs={6} >
                    <VText
                        fullWidth
                        autoFocus
                        id="name"
                        name="testName"
                        label="Test Name"
                        type="text"
                        size="normal"
                        // variant="standard"
                    />

                </Grid>
                <Grid item xs={6} >
                    <VText
                        autoFocus
                        required
                        // margin="dense"
                        id="note"
                        name="note"
                        label="Note"
                        type="text"
                        fullWidth
                        // variant="outlined"
                    />

                </Grid>
                <Grid item xs={6}>
                    <VAuto label={"Tags"} />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </MainCard>
        {/* </Container> */}
    </>
}

export default AddTest