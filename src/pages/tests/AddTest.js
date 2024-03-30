import MainCard from 'components/MainCard';
import { Autocomplete, Container, Grid, TextField } from '../../../node_modules/@mui/material/index';
import VAuto from 'components/VAuto';
import VText from 'components/VText';
import { useEffect, useState } from 'react';
import ColMap from './ColMap';

const AddTest = () => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Process the file
        console.log(file, event.target)
    };

    const [data, setData] = useState({});
    const handlFormChange = (event) => {
        setData({ ...data, [event?.target?.name]: event?.target?.value });
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return <>

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
                        label="Test Name *"
                        type="text"
                        size="normal"
                        variant="filled"
                        onChange={handlFormChange}
                        required
                    />

                </Grid>
                <Grid item xs={6} >
                    <VText
                        autoFocus
                        required
                        id="note"
                        name="note"
                        label="Note"
                        type="text"
                        fullWidth
                        variant="filled"
                        onChange={handlFormChange}
                    />

                </Grid>
                <Grid item xs={6}>
                    <VAuto name="tags" label={"Tags"} onChange={(...args) => {
                        console.log(args)
                    }} />
                </Grid>
                <Grid item xs={6}>
                    <VText
                        type="file"
                        autoFocus
                        required
                        id="noteaa"
                        name="file"
                        label=""
                        fullWidth
                        variant="filled"
                        onChange={handleFileChange}
                    />
                    {/* <input type="file" onChange={handleFileChange} /> */}
                </Grid>
                <Grid item xs={6}>
                    <VText
                        required
                        fullWidth
                        autoFocus
                        id="name"
                        name="comments"
                        label="Comments"
                        type="text"
                        size="normal"
                        variant="filled"
                        onChange={handlFormChange}
                    />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={12}>
                    <ColMap />
                </Grid>
            </Grid>
        </MainCard>

    </>
}

export default AddTest