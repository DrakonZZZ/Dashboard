import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Entry from './newEntry/Entry';
import List from './list/List';
import Single from './single/Single';
import { userData, productData } from './formData';

const Layout = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="entry"
              element={<Entry inputs={userData} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="entry"
              element={<Entry inputs={productData} title="Add New Product" />}
            />
          </Route>

          <Route path="*" element={<h1>Page does not exist</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Layout;
