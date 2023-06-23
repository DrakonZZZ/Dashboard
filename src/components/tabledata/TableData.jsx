import { useState } from 'react';
import { rows, columns } from './tbData';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import './tabledata.css';

const TableData = () => {
  const [data, setData] = useState(rows);
  const removeItem = (id) => {
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
  };
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
            <div
              className="delete-btn"
              onClick={() => removeItem(params.row.id)}
            >
              Delete
            </div>
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
        rows={data}
        columns={[...columns, ...actionCol]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        className="table-grid"
      />
    </div>
  );
};

export default TableData;
