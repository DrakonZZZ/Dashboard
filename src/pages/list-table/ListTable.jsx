import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';

import './listTable.css';

const ListTable = () => {
  return (
    <div className="list-table">
      <Sidebar />
      <div className="list-table-container">
        <Navbar />
        <div className="list-tb">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ListTable;
