import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NewParcel from './components/NewParcel';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';

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
            path='/parcels/new'
            element={
              <PrivateRoute>
                <NewParcel />
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
