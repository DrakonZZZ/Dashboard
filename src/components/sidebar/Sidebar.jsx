import { LuLayoutDashboard, LuSettings } from 'react-icons/lu';
import {
  BiUser,
  BiCreditCardAlt,
  BiBookAlt,
  BiStats,
  BiLogOut,
} from 'react-icons/bi';
import {
  MdProductionQuantityLimits,
  MdOutlineSpeed,
  MdNotificationsNone,
} from 'react-icons/md';

import { CgProfile } from 'react-icons/cg';
import { TbTruckDelivery } from 'react-icons/tb';
import './sidebar.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeGlobalContext } from '../../pages/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(ThemeGlobalContext);
  return (
    <div className="sidebar-section">
      <div className="side-top">
        <div className="logo">
          <Link to="/" className="admin-link">
            <h3>WickedAdmin</h3>
          </Link>
        </div>
      </div>
      <hr />
      <div className="side-middle">
        <ul>
          <span className="side-category">Main</span>
          <li>
            <Link to="/" className="link">
              <LuLayoutDashboard className="side-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <span className="side-category">Lists</span>
          <li>
            <Link to="/users" className="link">
              <BiUser className="side-icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="link">
              <MdProductionQuantityLimits className="side-icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <BiCreditCardAlt className="side-icon" />
            <span>Orders</span>
          </li>
          <li>
            <TbTruckDelivery className="side-icon" />
            <span>Delivery</span>
          </li>
          <span className="side-category">System</span>
          <li>
            <MdNotificationsNone className="side-icon" />
            <span>Notification</span>
          </li>
          <li>
            <BiBookAlt className="side-icon" />
            <span>Logs</span>
          </li>
          <li>
            <BiStats className="side-icon" />
            <span>Statistics</span>
          </li>
          <li>
            <MdOutlineSpeed className="side-icon" />
            <span>System Usage</span>
          </li>
          <span className="side-category">User</span>
          <li>
            <CgProfile className="side-icon" />
            <span>Profile</span>
          </li>
          <li>
            <LuSettings className="side-icon" />
            <span>Settings</span>
          </li>
          <li>
            <BiLogOut className="side-icon" />
            <span>Sign-Out</span>
          </li>
        </ul>
      </div>
      <span className="side-category">Theme</span>
      <div className="side-bottom">
        <div
          className="profile-color"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="profile-color"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
