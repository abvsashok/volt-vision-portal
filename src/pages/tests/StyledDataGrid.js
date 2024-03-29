import { DataGrid } from '@mui/x-data-grid';
import {
  styled
} from '@mui/material';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '&& .MuiDataGrid-overlayWrapper': {
    height: 300
  },
  '& .even-row': {
    backgroundColor: "lightgrey",
    color: '#000000',
    fontWeight: '800',
    fontSize: 15
  },
  '& .odd-row': {
    backgroundColor: "antiquewhite",
    color: 'black',
    fontWeight: '800',
    fontSize: 15
  }

}));
