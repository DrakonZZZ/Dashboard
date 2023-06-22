import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { MdDriveFolderUpload } from 'react-icons/md';
import './entry.css';

const Entry = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  console.log(file);
  return (
    <div className="entry-section">
      <Sidebar />
      <div className="entry-container">
        <Navbar />
        <div className="entry-top">
          <h1>{title}</h1>
        </div>
        <div className="entry-bottom">
          <div className="bm-left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
              }
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
                <input
                  type="file"
                  id="upload"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((data) => {
                return (
                  <div key={data.id} className="form-input">
                    <label htmlFor={data.title}>{data.label}</label>
                    <input type={data.type} name={data.label} />
                  </div>
                );
              })}
              <button>Button</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
