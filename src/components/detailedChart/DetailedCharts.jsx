import { MdOutlineMoreVert } from 'react-icons/md';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './detailChart.css';

const DetailedCharts = () => {
  return (
    <div className="detailed-container">
      <div className="detailed-top">
        <h1 className="title">Total Revenue</h1>
        <MdOutlineMoreVert />
      </div>
      <div className="detailed-bottom">
        <div className="featured-chart">
          <CircularProgressbar
            value={70}
            text={'70%'}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: 'rgb(32, 217, 156)',
              textColor: 'rgb(32, 217, 156)',
              trailColor: 'rgb(167, 251, 223);',
            })}
          />
        </div>
        <p className="detail-bottom-title">Today's Earning</p>
        <p className="detail-bottom-amount">$420</p>
        <p className="detail-bottom-description">
          All transaction are processed.
        </p>
      </div>
    </div>
  );
};

export default DetailedCharts;
