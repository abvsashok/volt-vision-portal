import * as React from 'react';
import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CancelRounded, SaveAsRounded, TextFields } from '../../../node_modules/@mui/icons-material/index';
import VButton from 'components/VButton';
import { LoadingButton } from '../../../node_modules/@mui/lab/index';
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const rows = [
    {
        cellParameter: 'Capacity',
        values: '',
        units: 'Ah',
        notes: ''
    },
    {
        cellParameter: 'Max Operation Voltage',
        values: '',
        units: 'v',
        notes: ''
    },
    {
        cellParameter: 'Min Operation Voltage',
        values: '',
        units: '',
        notes: ''
    },
    {
        cellParameter: 'Max Operating Temp',
        values: '',
        units: 'DegC',
        notes: ''
    }
];

export default function CellInfo({
    data,
    handleNewTestClose
}) {

    React.useEffect(() => {
        console.log(data)
        axios.get(`https://27yt4hyj5a.execute-api.us-east-1.amazonaws.com/electron/cellinfo?filename=test1&type=get`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <><TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Cell Parameter</StyledTableCell>
                        <StyledTableCell align="right">Values</StyledTableCell>
                        <StyledTableCell align="right">Units</StyledTableCell>
                        <StyledTableCell align="right">Notes</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.cellParameter}
                            </StyledTableCell>
                            <StyledTableCell align="right"><TextField
                                //   id=""
                                label="Value"
                            //   value={}
                            //   onChange={}

                            /></StyledTableCell>
                            <StyledTableCell align="right">{row.units}</StyledTableCell>
                            <StyledTableCell align="right">{row.notes}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

            <Grid sx={{
                gap: 2,
                mt: 2,
                display: 'flex',
                justifyContent: 'end'
            }}>
                <LoadingButton loading={false} type="submit" onClick={() => {

                }} variant="contained" startIcon={<SaveAsRounded />}>Save</LoadingButton >
                <VButton onClick={handleNewTestClose} startIcon={<CancelRounded />}  >Cancel</VButton>
            </Grid>

        </>
    );

}