import { rows, columns } from './tbData';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
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
            <Link to="/users/avatar" className="link">
              <div className="view-btn">View</div>
            </Link>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="table-container">
      <div className="table-data-title">
        <Link to="/users/entry" className="link">
          New User
          <AiOutlinePlus />
        </Link>
      </div>
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
