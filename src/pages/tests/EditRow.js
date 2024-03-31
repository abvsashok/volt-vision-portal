import VButton from "components/VButton";
import { Save, SaveAltOutlined, SaveAltRounded, SaveRounded } from "../../../node_modules/@mui/icons-material/index";
import { Grid, IconButton } from "../../../node_modules/@mui/material/index";
import TextField from '@mui/material/TextField'
import VText from "components/VText";
import VAuto from "components/VAuto";
import { useState } from "react";
import axios from "../../../node_modules/axios/index";
import { Urls } from "utils/constant";
import useNotify from "hooks/useNotify";
import { LoadingButton } from "../../../node_modules/@mui/lab/index";


const EditRow = ({
    data,
    handleAfterSave
}) => {
    console.log(data);
    const [value, setValue] = useState(data?.value);
    const [saving, setSaving] = useState(false);
    const { showSnackbar, SnackbarComponent } = useNotify();

    const handleSave = () => {
        setSaving(true);
        axios.post(Urls.testsData, {
            "type": "update",
            "primary_key": data?.row?.test_name,
            "column": data?.field,
            "value": value
        }).then(() => {

            showSnackbar("saved Successfully");
            setTimeout(() => {
                setSaving(false);
                handleAfterSave && handleAfterSave()
            }, 3000)
        }).catch(() => {
            showSnackbar("Error Ouured", "error")
            setSaving(false)
        })
    }
    return <>
        <Grid sx={{
            minWidth: 500,
            gap: 2,
            display: 'flex', justifyContent: "center",
            alignItems: "center"
        }}>
            {SnackbarComponent}
            {['project', 'tags'].includes(data?.field) ? <>
                <VAuto fullWidth sx={{ minWidth: 300 }} defaultValue={value || []} onChange={(e, _) => {
                    setValue(_)
                    // console.log(_)
                }} />
            </> : <>
                <VText
                    autoFocus
                    required
                    id="note"
                    name="column"
                    defaultValue={data?.value}
                    label={`${data?.colDef?.headerName}`}
                    type="text"
                    sx={{
                        fontWeight: 900,
                        fontSize: 30
                    }}
                    fullWidth
                    variant="filled"
                    onChange={(e) => {
                        setValue(e?.target?.value || '')
                    }}
                />
            </>}
            <LoadingButton loading={saving} variant="contained" startIcon={<SaveRounded />} onClick={handleSave} > Save </LoadingButton>
        </Grid>
    </>
}

export default EditRow;