import Chart from '../../components/chart/Chart';
import DetailedCharts from '../../components/detailedChart/DetailedCharts';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import Tab from '../../components/table/Table';
import './home.css';
const Home = () => {
  return (
    <div className="home-content">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets-section">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts-section">
          <DetailedCharts />
          <Chart />
        </div>
        <div className="list-section">
          <div className="list-title">Recent Transactions</div>
          <Tab />
        </div>
      </div>
    </div>
  );
};

export default Home;
