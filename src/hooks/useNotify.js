import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const useNotify = () => {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [severity, setSeverity] = React.useState('success');

    const handleOpen = (message, severity = 'success') => {
        setMessage(message);
        setSeverity(severity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const SnackbarComponent = (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );

    return {
        showSnackbar: handleOpen,
        SnackbarComponent
    };
};

export default useNotify;
