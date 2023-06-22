import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TableData from '../../components/tabledata/TableData';

import './list.css';

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <TableData />
      </div>
    </div>
  );
};

export default List;
