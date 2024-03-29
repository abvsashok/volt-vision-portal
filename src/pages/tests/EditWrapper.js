import { Popover } from "../../../node_modules/@mui/material/index";


const EditWrapper = ({ selectedRow, handleClosePopover, anchorEl, children }) => {

    return <>
        {/* <Popover
            id="popover"
            open={Boolean(selectedRow)}
            anchorEl={anchorEl}
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
                    {children}
                </Box>
            )}
        </Popover>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => 999 }} open={Boolean(selectedRow)}>
        </Backdrop> */}
        </>
}

export default EditWrapper;