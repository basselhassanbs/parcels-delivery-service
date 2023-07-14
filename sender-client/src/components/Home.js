import React, { useEffect, useState } from 'react';
import { fetchParcels } from '../state/actions/parcels';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.parcels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchParcels());
  }, []);
  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data && (
        <table className='table  table-striped '>
          <thead>
            <tr>
              <th scope='col'>Description</th>
              <th scope='col'>Pick-up Address</th>
              <th scope='col'>Drop-off Address</th>
              <th scope='col'>Status</th>
              <th scope='col'>Pick-up Time</th>
              <th scope='col'>Drop-off Time</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td style={{ textAlign: 'center' }} colSpan='6'>
                  No data to display{' '}
                </td>
              </tr>
            )}
            {data.map((parcel) => (
              <tr key={parcel._id}>
                <td>{parcel.description}</td>
                <td>{parcel.pickUpAddress}</td>
                <td>{parcel.dropOffAddress}</td>
                <td>{parcel.status}</td>
                <td>{parcel.pickUpTime || '-'}</td>
                <td>{parcel.dropOffTime || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
