import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import './single.css';

const Single = () => {
  return (
    <div className="single-section">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="single-top">
          <div className="single-left">
            <div className="edit-btn">Edit</div>
            <div className="item">
              <img
                src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/01/1200/675/nicolas-cage.jpg?ve=1&tl=1"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Nick Cage</h1>
                <div className="item-detail">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">221-1223-1251</span>
                </div>
                <div className="item-detail">
                  <span className="item-key">Email:</span>
                  <span className="item-value">nicolas.cage@hollywood.com</span>
                </div>
                <div className="item-detail">
                  <span className="item-key">Address:</span>
                  <span className="item-value">
                    363 Copa De Oro Rd, Los Angeles, CA 90077
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-key">Country:</span>
                  <span className="item-value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single-right">
            <Chart chartTitle="Users Purchase (Last 12 months)" ratio={3 / 1} />
          </div>
        </div>
        <div className="single-bottom">
          <h1 className="item-title-bottom">Recent Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
