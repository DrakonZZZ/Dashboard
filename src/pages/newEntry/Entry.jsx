import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { MdDriveFolderUpload } from 'react-icons/md';
import './entry.css';

const Entry = () => {
  return (
    <div className="entry-section">
      <Sidebar />
      <div className="entry-container">
        <Navbar />
        <div className="entry-top">
          <h1>Add New User</h1>
        </div>
        <div className="entry-bottom">
          <div className="bm-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              alt=""
            />
          </div>
          <div className="bm-right">
            <form>
              <div className="form-input">
                <label htmlFor="upload">
                  <MdDriveFolderUpload className="bm-icon" />
                  Click here to upload image
                </label>
                <input type="file" id="upload" />
              </div>
              <div className="form-input">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
              </div>
              <div className="form-input">
                <label htmlFor="fullname">First and Last Name</label>
                <input type="text" name="fullname" id="fullname" />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input type="email" name="Email" id="Email" />
              </div>
              <div className="form-input">
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" id="pass" />
              </div>
              <div className="form-input">
                <label htmlFor="phone">Phone no.</label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div className="form-input">
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" />
              </div>
              <div className="form-input">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" />
              </div>
              <button>Button</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
