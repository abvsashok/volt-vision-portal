import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { BarChart, StarRateRounded, AddCircle } from '@mui/icons-material';
import { Box, Grid, Typography, Link } from "@mui/material/index";
import NestedMenuItem from "./NestedMenuItem";
const Landing = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClickOption = (event) => {
        // if (anchorEl) {
        //     setAnchorEl(null);
        // } else
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return <>
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
            <NestedMenuItem anchorEl={anchorEl} handleClose={handleClose} nestedItems={[
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

        </Box>
    </>
}

export default Landing;