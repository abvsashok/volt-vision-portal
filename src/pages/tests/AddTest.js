import MainCard from 'components/MainCard';
import { Grid, LinearProgress, Paper } from '../../../node_modules/@mui/material/index';
import VAuto from 'components/VAuto';
import VText from 'components/VText';
import { useEffect, useState } from 'react';
import ColMap from './ColMap';
import VButton from 'components/VButton';
import useUploadS3 from './useUploadS3';
import { CancelRounded, SaveAsRounded, UploadFileOutlined } from '../../../node_modules/@mui/icons-material/index';
import { Urls, rightColsMapping } from 'utils/constant';
import axios from '../../../node_modules/axios/index';
import CustomNoRowsOverlay from 'components/CustomNoRowsOverlay';
import moment from '../../../node_modules/moment/moment';
import { LoadingButton } from '../../../node_modules/@mui/lab/index';
import useNotify from 'hooks/useNotify';

const AddTest = ({
    handleNewTestClose
}) => {
    const { showSnackbar, SnackbarComponent } = useNotify();
    const [data, setData] = useState({});
    const [saving, setSaving] = useState(false)
    const [colsMapping, setColsMapping] = useState([])
    const { uploadFile } = useUploadS3();
    useEffect(() => {
        const fetchDataInterval = setInterval(() => {
            fetchColMapping();
        }, 20000);

        return () => clearInterval(fetchDataInterval);
    }, [data?.file]);

    const fetchColMapping = async () => {
        try {
            const response = await axios.get(Urls.colsMapping, {
                params: {
                    "filename": "sampledatafromlocal_20240330180218"
                }
            });
            const responseData = response.data;
            console.log(responseData)

            // Check if the desired data is found
            if (false) {
                clearInterval(fetchDataInterval); // Stop calling API
            } else {
                // setColsMapping(responseData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handlFormChange = (event) => {
        setData({ ...data, [event?.target?.name]: event?.target?.value });
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        console.log(file, event.target);
        setData({ ...data, file, testName: file.name });
        setColsMapping(rightColsMapping)
    };
    const handleUpload = () => {
        uploadFile(data?.file);
        setColsMapping(rightColsMapping)
    }
    useEffect(() => {
        console.log(data)
    }, [data]);

    const handleSubmit = () => {
        setSaving(true)
        axios.post(Urls.testsData, {
            "type": "add",
            "test_name": data?.testName,
            "tags": data?.tags,
            "comments": data?.comments,
            "project": data?.project || [],
            "cycles": 1,
            "start_time": moment(new Date()).format("YYYY-MM-DD"),
            "last_updated": moment(new Date()).format("YYYY-MM-DD"),
            "columnmap": data?.columnmap || {}
        }).then(() => {

            showSnackbar("saved Successfully");
            setTimeout(() => {
                setSaving(false);
                handleNewTestClose && handleNewTestClose()
            }, 3000)
        }).catch(() => {
            showSnackbar("Error Ouured", "error")
            setSaving(false)
        })
    }

    return <>

        <MainCard>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                {SnackbarComponent}
                <Grid container
                    spacing={2}
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start" >
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Grid sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <VText
                                type="file"
                                autoFocus
                                required
                                id="noteaa"
                                name="file"
                                label=""
                                fullWidth
                                variant="outlined"
                                onChange={handleFileChange}
                            />
                            <VButton onClick={handleUpload} startIcon={<UploadFileOutlined />} variant="contained" sx={{ mt: 0 }} > Upload </VButton>
                        </Grid>
                        <Grid item xs={12} >
                            <VText
                                fullWidth
                                autoFocus
                                id="name"
                                name="testName"
                                label="Test Name"
                                type="text"
                                size="normal"
                                variant="outlined"
                                value={data?.testName || ''}
                                onChange={handlFormChange}
                                required
                            />

                        </Grid>

                        <Grid item xs={12} >
                            <VText
                                autoFocus
                                required
                                id="note"
                                name="note"
                                label="Note"
                                type="text"
                                value={data?.note || ''}
                                fullWidth
                                variant="outlined"
                                onChange={handlFormChange}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <VAuto name="tags" label={"Tags"} onChange={(event, tagsList) => {
                                setData({ ...data, tags: tagsList })
                            }} />
                        </Grid>
                        <Grid item xs={12}>
                            <VAuto name="project" label={"Project"} onChange={(event, projects) => {
                                setData({ ...data, project: projects })
                            }} />
                        </Grid>
                        <Grid item xs={12}>
                            <VText
                                required
                                fullWidth
                                autoFocus
                                id="name"
                                name="comments"
                                label="Comments"
                                type="text"
                                size="normal"
                                variant="outlined"
                                onChange={handlFormChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6} >
                        <Paper style={{ padding: 1, maxHeight: '60vh', overflowY: 'scroll' }}>
                            {/* <LinearProgress /> */}
                            {colsMapping?.length ? <ColMap rightCols={colsMapping} handleChangeTags={(latestMap) => {
                                setData({ ...data, 'columnmap': { ...data?.columnmap, ...latestMap } })
                            }} /> : <>
                                <h2>Columns Mapping</h2>
                                <CustomNoRowsOverlay />
                            </>}
                        </Paper>
                    </Grid>
                </Grid>
                <Grid sx={{
                    gap: 2,
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'end'
                }}>
                    <LoadingButton loading={saving} type="submit" onClick={() => {

                    }} variant="contained" startIcon={<SaveAsRounded />}>Save</LoadingButton >
                    <VButton onClick={handleNewTestClose} startIcon={<CancelRounded />}  >Cancel</VButton>
                </Grid>
            </form>
        </MainCard>

    </>
}

export default AddTest