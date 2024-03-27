import { DataGrid } from '@mui/x-data-grid';
import {
  styled
} from '@mui/material';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '&& .MuiDataGrid-overlayWrapper': {
    height: 300
  },
  '& .even-row': {
    backgroundColor: "lightgrey"
  },
  '& .odd-row': {
    backgroundColor: "antiquewhite"
  }

}));
