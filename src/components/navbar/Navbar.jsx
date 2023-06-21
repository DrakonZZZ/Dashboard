import { BsSearch } from 'react-icons/bs';
import { LuLanguages } from 'react-icons/lu';
import {
  MdOutlineDarkMode,
  MdFullscreen,
  MdNotificationsNone,
} from 'react-icons/md';
import { BsChatSquare, BsCardList } from 'react-icons/bs';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <BsSearch />
        </div>
        <div className="items">
          <div className="item">
            <BsCardList className="nav-icon" />
          </div>
          <div className="item">
            <MdNotificationsNone className="nav-icon" />
            <p className="badge-count">1</p>
          </div>
          <div className="item">
            <MdOutlineDarkMode className="nav-icon" />
          </div>
          <div className="item">
            <BsChatSquare className="nav-icon" />
            <p className="badge-count">2</p>
          </div>
          <div className="item">
            <LuLanguages className="nav-icon" />
            English
          </div>
          <div className="item">
            <MdFullscreen className="nav-icon" />
          </div>
          <div className="item">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5d7992e0561f696ca525af76/7897c5f6-cf6d-4794-b668-39df34839781/sage-green-aesthetic-4.png"
              className="pfp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
