import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const { loading } = useSelector((state) => state.parcels);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        visibility: loading ? '' : 'hidden',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='spinner-border' role='status'>
        <span className='sr-only'></span>
      </div>
    </div>
  );
};

export default Loader;
