import { BarChartOutlined, Edit } from "../../../node_modules/@mui/icons-material/index";
import { Box } from "../../../node_modules/@mui/material/index";


const useTests = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: () => {
                return <Box sx={{ cursor: 'pointer' }}>
                    <BarChartOutlined />
                </Box>
            }
        },
        {
            field: 'testName',
            headerName: 'Test Name',
            width: 150,
        },
        {
            field: 'file',
            headerName: 'Selected File',
            width: 110,
        },
        {
            field: 'cellInformation',
            headerName: 'Cell Information',
            width: 110,
        },
        {
            field: 'tags',
            headerName: 'tags',
            width: 110,
        },
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     // width: 160,
        //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        // },
    ];

    const rows = [
       
    ];
    return {
        columns, rows
    };
}

export default useTests;