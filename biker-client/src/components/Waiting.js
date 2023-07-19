import React, { useEffect, useState } from 'react';
import { fetchWaitingParcels } from '../state/actions/parcels';
import { useDispatch, useSelector } from 'react-redux';
import PickupModal from './PickupModal';

const Waiting = () => {
  const { waitingParcels, loading, error } = useSelector(
    (state) => state.parcels
  );
  const [parcelId, setParcelId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWaitingParcels());
  }, []);
  return (
    <div>
      <>
        <h4>Available parcels list</h4>
        <table className='table  table-striped '>
          <thead>
            <tr>
              <th scope='col'>Description</th>
              <th scope='col'>Pick-up Address</th>
              <th scope='col'>Drop-off Address</th>
              <th scope='col'>Status</th>
              {/* <th scope='col'>Pick-up Time</th>
              <th scope='col'>Drop-off Time</th> */}
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {waitingParcels && waitingParcels.length === 0 && (
              <tr>
                <td style={{ textAlign: 'center' }} colSpan='5'>
                  No data to display{' '}
                </td>
              </tr>
            )}
            {waitingParcels &&
              waitingParcels.map((parcel) => (
                <tr key={parcel._id}>
                  <td>{parcel.description}</td>
                  <td>{parcel.pickUpAddress}</td>
                  <td>{parcel.dropOffAddress}</td>
                  <td>{parcel.status}</td>
                  {/* <td>{parcel.pickUpTime || '-'}</td>
                  <td>{parcel.dropOffTime || '-'}</td> */}
                  <td>
                    <button
                      className='btn btn-primary'
                      data-bs-toggle='modal'
                      data-bs-target='#modal'
                      onClick={() => setParcelId(parcel._id)}
                    >
                      Pick up
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <PickupModal parcelId={parcelId} />
      </>
    </div>
  );
};

export default Waiting;
