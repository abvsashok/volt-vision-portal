import * as React from 'react';
import Box from '@mui/material/Box';
import useTests from './useTests';
import { Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { PlusOneOutlined, CancelRounded, SaveAsRounded } from '../../../node_modules/@mui/icons-material/index';
import { StyledDataGrid } from './StyledDataGrid';
import CustomNoRowsOverlay from 'components/CustomNoRowsOverlay';
import { Backdrop, LinearProgress, Popover } from '../../../node_modules/@mui/material/index';
import VButton from 'components/VButton';
import AddTest from './AddTest';
import EditRow from './EditRow';


export default function TestsTable() {

    const { columns, rows, selectedRow, anchorEl, loading, handleClosePopover } = useTests();

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
                <VButton variant="contained" color="primary" onClick={(event) => {

                }}>
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
            rows={loading ? [] : rows}
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
            loading={loading}
            slots={{
                noRowsOverlay: CustomNoRowsOverlay,
                loadingOverlay: LinearProgress,
            }}
            sx={{ '--DataGrid-overlayHeight': '300px' }}
        />
        <Popover
            id="popover"
            open={Boolean(selectedRow)}
            anchorEl={anchorEl}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 400
            }}
            onClose={handleClosePopover}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            {selectedRow && (
                <Box p={2}>
                    <EditRow data={selectedRow} />
                </Box>
            )}
        </Popover>
        <Backdrop id="backdropid" sx={{ color: 'red', zIndex: (theme) => theme.zIndex.drawer + 300 }} open={Boolean(selectedRow)}>
        </Backdrop>
        <Dialog
            open={addNewTestModal?.open}
            onClose={handleNewTestClose}
            maxWidth={"lg"}
            fullWidth={true}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                },
            }}
        >
            <DialogTitle><h2>Add Test</h2></DialogTitle>
            <DialogContent >
                <AddTest />
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
                <VButton onClick={handleNewTestClose} startIcon={<CancelRounded />} variant="contained" >Cancel</VButton>
                <VButton type="submit" variant="outlined" startIcon={<SaveAsRounded />}>Save</VButton>
            </DialogActions>
        </Dialog>
    </Box>
}
