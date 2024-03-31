import { useEffect, useState } from "react";
import { Download, EditNoteOutlined, PhotoAlbum, } from "../../../node_modules/@mui/icons-material/index";
import { Box, Chip, IconButton, Stack, Typography } from "../../../node_modules/@mui/material/index";
import axios from "../../../node_modules/axios/index";
import { Urls } from "utils/constant";

const ColVal = ({ children }) => <Typography sx={{ m: 0, fontSize: 16, fontWeight: 700, p: 0 }}>{children}</Typography>

const useTests = () => {

    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        loadTableData();
    }, []);
    const handleClosePopover = () => {
        setSelectedRow(false);
        setAnchorEl(null)
    }

    const loadTableData = () => {
        setLoading(true);
        axios.get(Urls.testsData).then((r) => r.data).then((resp) => {
            setLoading(false);
            try {
                setRows(resp?.map((r, i) => ({ ...r, id: i + 1 })));
            } catch (e) {
                console.log(e)
                setRows([])
            }
        }).catch((err) => {
            setLoading(false);
            console.log(err)
        })
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'actions',
            headerName: 'Actions',
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
            field: 'test_name',
            headerName: 'Test Name',
            width: 150,
            renderCell: (data) => {
                const { row } = data;
                return <>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mt: 1 }}
                    >
                        <EditNoteOutlined sx={{ cursor: 'pointer' }} onClick={(event) => {
                            setSelectedRow(data);
                            setAnchorEl(event.currentTarget)
                        }} />
                        <ColVal>{row?.test_name}</ColVal>

                    </Stack>
                </>
            }
        },
        {
            field: 'tags',
            headerName: 'tags',
            flex: 1,
            renderCell: (data) => {
                const { row } = data;

                return <><Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 1 }}
                >
                    <EditNoteOutlined sx={{ cursor: 'pointer' }} onClick={(event) => {
                        setSelectedRow(data);
                        setAnchorEl(event.currentTarget)
                    }} />
                    {row?.tags?.map((v, i) => {
                        return <>
                            <Chip label={v} key={i} color="info" sx={{ mr: 0.5, p: 0 }} />
                        </>
                    })}
                </Stack>
                </>
            }
        },

        {
            flex: 1,
            field: 'comments',
            headerName: 'Comments',
            renderCell: (data) => {
                const { row } = data;
                return <>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mt: 1 }}
                    >
                        <EditNoteOutlined sx={{ cursor: 'pointer' }} onClick={(event) => {
                            setSelectedRow(data);
                            setAnchorEl(event.currentTarget)
                        }} />
                        <ColVal>{row?.comments}</ColVal>

                    </Stack>
                </>
            }
        },
        {
            field: 'project',
            headerName: 'Project',
            width: 150,
            renderCell: (data) => {
                const { row } = data;
                return <>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mt: 1 }}
                    >
                        <EditNoteOutlined sx={{ cursor: 'pointer' }} onClick={(event) => {
                            setSelectedRow(data);
                            setAnchorEl(event.currentTarget)
                        }} /> <ColVal>{row?.project}</ColVal>

                    </Stack>
                </>
            }
        },
        {
            field: 'cellInformation',
            headerName: 'Cell Information',
            width: 110,
            renderCell: (data) => {
                const { row } = data;
                return <>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mt: 1 }}
                    >
                        <EditNoteOutlined sx={{ cursor: 'pointer' }} onClick={(event) => {
                            setSelectedRow(data);
                            setAnchorEl(event.currentTarget)
                        }} /> <ColVal>{row?.cellInformation}</ColVal>

                    </Stack>
                </>
            }
        },
        {
            field: 'cycles',
            headerName: 'Cycles',
            width: 110,
            renderCell: (data) => {
                const { row } = data;
                return <>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mt: 1 }}
                    >
                        <EditNoteOutlined sx={{ cursor: 'pointer' }} onClick={(event) => {
                            setSelectedRow(data);
                            setAnchorEl(event.currentTarget)
                        }} /> <ColVal>{row?.cycles}</ColVal>

                    </Stack>
                </>
            }
        },
        {
            field: 'start_time',
            headerName: 'Start Time',
            width: 110,
        },
        {
            field: 'updateTime',
            headerName: 'Last Updated',
            width: 110,
        },
    ];

    return {
        columns, rows, selectedRow, anchorEl, loading, handleClosePopover, setSelectedRow
    };
}

export default useTests;