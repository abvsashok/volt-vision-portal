import React, { useState } from "react";
import { LogoutOutlined, BarChartOutlined, UserOutlined } from '@ant-design/icons';
import { BarChart, StarRateRounded, AddCircle } from '@mui/icons-material';
import { Box, Grid, Typography } from "@mui/material/index";
import TestsTable from "./TestsTable";
import { Card } from "@mui/material/index";
import TabsBlock from "./TabsBlock";
const Tests = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClickOption = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return <>
        <Box
            sx={{
                // margin: 1,
                // padding: 2,
                // gap: 5,
                color: 'text.primary', bgcolor: '#fff'
            }}>
            <Card sx={{}} >

                <TabsBlock />
            </Card>
        </Box>
    </>
}

export default Tests;