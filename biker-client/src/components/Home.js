import React, { useEffect, useState } from 'react';
import { deliverParcel, fetchParcels } from '../state/actions/parcels';
import { useDispatch, useSelector } from 'react-redux';
import DeliverModal from './DeliverModal';

const Home = () => {
  const { parcels, loading, error } = useSelector((state) => state.parcels);
  const [parcelId, setParcelId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchParcels());
  }, []);

  return (
    <div>
      <>
        <h4>Your parcels list</h4>
        <table className='table  table-striped '>
          <thead>
            <tr>
              <th scope='col'>Description</th>
              <th scope='col'>Pick-up Address</th>
              <th scope='col'>Drop-off Address</th>
              <th scope='col'>Status</th>
              <th scope='col'>Pick-up Time</th>
              <th scope='col'>Drop-off Time</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels && parcels.length === 0 && (
              <tr>
                <td style={{ textAlign: 'center' }} colSpan='6'>
                  No data to display{' '}
                </td>
              </tr>
            )}
            {parcels &&
              parcels.map((parcel) => (
                <tr key={parcel._id}>
                  <td>{parcel.description}</td>
                  <td>{parcel.pickUpAddress}</td>
                  <td>{parcel.dropOffAddress}</td>
                  <td>{parcel.status}</td>
                  <td>{parcel.pickUpTime || '-'}</td>
                  <td>{parcel.dropOffTime || '-'}</td>
                  <td>
                    {parcel.status === 'picked' ? (
                      <button
                        onClick={() => setParcelId(parcel._id)}
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#modal'
                      >
                        Deliver
                      </button>
                    ) : (
                      'No action available'
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <DeliverModal parcelId={parcelId} />
      </>
    </div>
  );
};

export default Home;
