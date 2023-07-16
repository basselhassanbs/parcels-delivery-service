import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Waiting from './components/Waiting';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';

const App = () => {
  const { loading } = useSelector((state) => state.parcels);

  return (
    <div>
      {loading && <Loader />}
      <Navbar />
      <div className='p-3'>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/parcels/waiting'
            element={
              <PrivateRoute>
                <Waiting />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
