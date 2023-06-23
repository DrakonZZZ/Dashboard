import rows from './data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.css';

const Tab = () => {
  return (
    <TableContainer component={Paper} elevation={0} className="table-section">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tb-cell">Product ID</TableCell>
            <TableCell className="tb-cell">Product</TableCell>
            <TableCell className="tb-cell">Customer</TableCell>
            <TableCell className="tb-cell">Date</TableCell>
            <TableCell className="tb-cell">Price</TableCell>
            <TableCell className="tb-cell">Payment Mode</TableCell>
            <TableCell className="tb-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tb-cell">{row.id}</TableCell>
              <TableCell className="tb-cell">
                <div className="tb-cell-wrapper">
                  <img src={row.img} alt="" className="tb-img" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tb-cell">{row.customer}</TableCell>
              <TableCell className="tb-cell">{row.date}</TableCell>
              <TableCell className="tb-cell">{row.price}</TableCell>
              <TableCell className="tb-cell">{row.mode}</TableCell>
              <TableCell className="tb-cell">
                <span className={`tb-status-${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tab;
