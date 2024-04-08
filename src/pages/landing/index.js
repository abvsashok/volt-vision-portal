import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { BarChart, StarRateRounded, AddCircle } from '@mui/icons-material';
import { Box, Grid, Typography, Link } from "@mui/material/index";
import { Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import NestedMenuItem from "./NestedMenuItem";
import { CancelRounded, SaveAsRounded } from "../../../node_modules/@mui/icons-material/index";
import VButton from "components/VButton";
import AddTest from "pages/tests/AddTest";
import useNotify from "hooks/useNotify";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const [addNewTestModal, setAddNewTestModal] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const { showSnackbar, SnackbarComponent } = useNotify();
    const navigate = useNavigate();

    const handleClickOption = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleNewTestClose = () => {
        setAddNewTestModal({});
        navigate("/admin/tests")
    }

    return <>
        {SnackbarComponent}
        <Box container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                margin: 3,
                spaceBetween: 'center',
                gap: 5
            }}>
            <NestedMenuItem anchorEl={anchorEl} handleClose={handleClose} handleClickMenu={() => {
                setAddNewTestModal({ open: true });
            }} nestedItems={[
                { primaryText: 'Graph' },
                { primaryText: 'Template' },
                { primaryText: 'Collection' },
            ]} />
            <Link variant="h6" component={RouterLink} to="/admin/tests" color="text.primary">
                <Box sx={{
                    display: 'flex', justifyContent: 'center',
                    gap: 2,
                    alignItems: 'center', flexDirection: 'column'
                }}>
                    <BarChart size="lg" sx={{ fontSize: 90, }} />
                    <Typography variant="h4">Recent Graphs</Typography>
                </Box>
            </Link>
            <Box sx={{
                display: 'flex',
                cursor: 'pointer',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center', flexDirection: 'column'
            }}>
                <Link variant="h6" component={RouterLink} to="/admin/tests" color="text.primary">
                    <StarRateRounded size="lg" sx={{ fontSize: 90 }} />
                </Link>
                <Link variant="h6" component={RouterLink} to="/admin/tests" color="text.primary">

                    <Typography variant="h4">Tests</Typography>
                </Link>

            </Box>
            <Box

                sx={{
                    display: 'flex', justifyContent: 'center',
                    gap: 2,
                    cursor: "pointer",
                    alignItems: 'center', flexDirection: 'column'
                }}>
                <Box onClick={handleClickOption}>
                    <AddCircle size="2x" sx={{ fontSize: 90 }}
                    />
                </Box>
                <Typography variant="h4">Create New</Typography>
            </Box>
            <Dialog
                open={addNewTestModal?.open}
                onClose={handleNewTestClose}
                maxWidth={"lg"}
                fullWidth={true}
            >
                <DialogTitle><h2>Add Test</h2></DialogTitle>
                <DialogContent >
                    <AddTest handleNewTestClose={handleNewTestClose} />
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>


                </DialogActions>
            </Dialog>
        </Box>
    </>
}

export default Landing;