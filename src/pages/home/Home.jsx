import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.css';
const Home = () => {
  return (
    <div className="home-content">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets-section">
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
