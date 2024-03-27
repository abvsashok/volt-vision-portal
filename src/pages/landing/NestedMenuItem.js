import React, { useState } from 'react';
import { Divider, Popover, List, ListItem, ListItemText } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function NestedMenuItem({ anchorEl, handleClose, nestedItems }) {
    // const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <List>
                    {nestedItems.map((item, index) => (
                        <>
                            <ListItem key={index} button sx={{ minWidth: 160 }}>
                                <ListItemText primary={item.primaryText} />
                                <ArrowForwardIosRoundedIcon style={{ fontSize: 15 }} />
                            </ListItem>
                            <Divider sx={{ my: 0.5 }} />
                        </>
                    ))}
                </List>
            </Popover>
        </>
    );
}


export default NestedMenuItem;
