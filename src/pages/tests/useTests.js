import { BarChartOutlined, Download, Edit, EditAttributesRounded, EditNoteOutlined, PhotoAlbum, Update, UploadFile } from "../../../node_modules/@mui/icons-material/index";
import { Box, Chip, IconButton, Stack, Typography } from "../../../node_modules/@mui/material/index";

const ColVal = ({ children }) => <Typography  sx={{ m: 0, fontSize: 16, fontWeight: 700, p: 0 }}>{children}</Typography>

const useTests = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'actions',
            headerName: 'Actions',
            // width: 150,
            renderCell: () => {
                // display: 'flex', justifyContent: 'center', alignItems: 'center'
                return <Box sx={{ cursor: 'pointer', }}>
                    <Stack direction="row" spacing={0} gap={0} sx={{ mt: 1 }}>
                        <IconButton
                            aria-label="Download"
                            edge="start"
                            color="secondary"
                            sx={{ color: 'text.primary', color: 'green', bgcolor: `grey.100` }} >
                            <Download />
                        </IconButton>

                        <IconButton
                            aria-label=""
                            edge="start"
                            color="secondary"
                            sx={{ color: 'text.primary', color: 'blue', bgcolor: `grey.100` }} >
                            <PhotoAlbum />
                        </IconButton>
                    </Stack>
                </Box>
            }
        },
        {
            field: 'testName',
            headerName: 'Test Name',
            width: 150,
            renderCell: ({ row }) => {
                return <>
                   <Stack
                        direction="row"
                        spacing={1}
                        sx={{mt:1}}
                    >
                        <EditNoteOutlined /> <ColVal>{row?.testName}</ColVal>
                       
                    </Stack>
                </>
            }
        },
        {
            field: 'project',
            headerName: 'Project',
            width: 150,
            renderCell: ({ row }) => {
                return <>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{mt:1}}
                    >
                        <EditNoteOutlined /> <ColVal>{row?.project}</ColVal>
                       
                    </Stack>
                </>
            }
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
            renderCell: ({ row }) => {
                return <>
                   <Stack
                        direction="row"
                        spacing={1}
                        sx={{mt:1}}
                    >
                        <EditNoteOutlined /> <ColVal>{row?.cellInformation}</ColVal>
                       
                    </Stack>
                </>
            }
        },
        {
            field: 'tags',
            headerName: 'tags',
            // width: 110,
            flex: 1,
            renderCell: ({ row }) => {
                console.log(row)

                return <>
                    {row?.tags?.map((v) => {
                        return <>
                            <Chip label={v} color="info" sx={{ mr: 0.5, p: 0, borderRadius: '50%' }} /></>
                    })}

                </>
            }
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
        {
            id: '1',
            testName: "Test",
            project: "Project",
            comments: "comment",
            cellInformation: "",
            tags: [1, 2, 4],
            createdAt: '2024-03-23',
            updatedAt: '2024-04-02'
        },
        {
            id: '2',
            testName: "Test",
            project: "Project",
            comments: "comment",
            cellInformation: "",
            tags: [1, 2, 4],
            createdAt: '2024-03-23',
            updatedAt: '2024-04-02'
        },
        {
            id: '3',
            testName: "Test",
            project: "Project",
            comments: "comment",
            cellInformation: "",
            tags: [1, 2, 4],
            createdAt: '2024-03-23',
            updatedAt: '2024-04-02'
        }

    ];
    return {
        columns, rows
    };
}

export default useTests;