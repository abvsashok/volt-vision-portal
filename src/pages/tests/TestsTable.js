import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useTests from './useTests';
import { Stack, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Container } from '@mui/material';
import { CancelOutlined, PlusOneOutlined, CancelPresentationRounded, CancelPresentationSharp, CancelRounded, SaveAltRounded, CopyAllRounded, SaveAsRounded } from '../../../node_modules/@mui/icons-material/index';
import { StyledDataGrid } from './StyledDataGrid';
import CustomNoRowsOverlay from 'components/CustomNoRowsOverlay';
import { Grid, LinearProgress } from '../../../node_modules/@mui/material/index';
import VButton from 'components/VButton';



export default function TestsTable() {

    const { columns, rows } = useTests();

    const [addNewTestModal, setAddNewTestModal] = React.useState({});
    const handleNewTestClose = () => {
        setAddNewTestModal({});
    }

    return <Box  >
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            display="flex"
            spacing={0}
            sx={{ paddingBottom: 1 }}
        >
            <Box>
                <VButton variant="contained" color="primary">
                    Post Selected
                </VButton>

            </Box>
            <Box>
                <VButton variant="outlined" onClick={() => {
                    setAddNewTestModal({ open: true });
                }} startIcon={<PlusOneOutlined />}>
                    Add new test
                </VButton>

            </Box>
        </Stack>
        <StyledDataGrid
            getRowClassName={(params) => {
                if (params?.id % 2 == 0)
                    return `even-row`

                return `odd-row`
            }}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
            // loading={loading}
            slots={{
                noRowsOverlay: CustomNoRowsOverlay,
                loadingOverlay: LinearProgress,
            }}
            sx={{ '--DataGrid-overlayHeight': '300px' }}
        />
        <Dialog
            open={addNewTestModal?.open}
            onClose={handleNewTestClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    // const formData = new FormData(event.currentTarget);
                    // const formJson = Object.fromEntries(formData.entries());
                    // const email = formJson.email;
                    // console.log(email);
                    // handleClose();
                },
            }}
        >
            <DialogTitle><h2>Add Test</h2></DialogTitle>
            <DialogContent sx={{ p: 1, m: 1 }}>
                <Container minWidth="lg" sx={{ width: 400 }} >
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Test Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="note"
                        name="note"
                        label="Note"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                </Container>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
                <VButton onClick={handleNewTestClose} startIcon={<CancelRounded />} variant="contained" >Cancel</VButton>
                <VButton type="submit" variant="outlined" startIcon={<SaveAsRounded />}>Save</VButton>
            </DialogActions>
        </Dialog>
    </Box>
}
