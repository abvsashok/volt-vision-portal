import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useTests from './useTests';
import { Stack, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { PlusOneOutlined } from '../../../node_modules/@mui/icons-material/index';
import { StyledDataGrid } from './StyledDataGrid';
import CustomNoRowsOverlay from 'components/CustomNoRowsOverlay';
import { LinearProgress } from '../../../node_modules/@mui/material/index';



export default function TestsTable() {

    const { columns, rows } = useTests();

    const [addNewTestModal, setAddNewTestModal] = React.useState({});
    const handleNewTestClose = () => {
        setAddNewTestModal({});
    }

    return <Box >
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            display="flex"
            spacing={2}
            sx={{ padding: 2 }}
        >
            <Box>
                <Button variant="contained" color="primary">
                    Post Selected
                </Button>

            </Box>
            <Box>
                <Button variant="outlined" color="primary" onClick={() => {
                    setAddNewTestModal({ open: true });
                }} startIcon={<PlusOneOutlined />}>
                    Add new test
                </Button>

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

        >
            <DialogTitle>Add Test</DialogTitle>
            <DialogContent>
                <DialogContentText>

                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleNewTestClose} >Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog>
    </Box>
}
