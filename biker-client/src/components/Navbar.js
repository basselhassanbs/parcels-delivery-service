import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme='dark'>
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>Delivery System - bikers</span>
        <div className='collapse navbar-collapse' id='navbarNav'>
          {authenticated && (
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className={`nav-link`} to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/parcels/waiting'>
                  Waiting parcels
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
