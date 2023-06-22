import { rows, columns } from './tbData';
import { DataGrid } from '@mui/x-data-grid';
import './tabledata.css';

const TableData = () => {
  const actionCol = [
    {
      field: 'action',
      headerName: 'action',
      width: 300,
      renderCell: (params) => {
        return (
          <div className="action-cell">
            <div className="view-btn">View</div>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="table-container">
      <DataGrid
        rows={rows}
        columns={[...columns, ...actionCol]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default TableData;
