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

const Sidebar = () => {
  return (
    <div className="sidebar-section">
      <div className="side-top">
        <div className="logo">
          <h3>WickedAdmin</h3>
        </div>
      </div>
      <hr />
      <div className="side-middle">
        <ul>
          <span className="side-category">Main</span>
          <li>
            <LuLayoutDashboard className="side-icon" />
            <span>Dashboard</span>
          </li>
          <span className="side-category">Lists</span>
          <li>
            <BiUser className="side-icon" />
            <span>Users</span>
          </li>
          <li>
            <MdProductionQuantityLimits className="side-icon" />
            <span>Products</span>
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
        <div className="profile-color"></div>
        <div className="profile-color"></div>
      </div>
    </div>
  );
};

export default Sidebar;
