import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pickUpParcel } from '../state/actions/parcels';

const PickupModal = ({ parcelId }) => {
  const [pickUpTime, setPickUp] = useState('');
  const [dropOffTime, setDropOff] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(pickUpParcel(parcelId, { pickUpTime, dropOffTime }));
  };
  return (
    <div
      className='modal fade'
      id='modal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Pick up parcel</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='mb-2'>
              <label className='form-label'>Pick-up Time</label>
              <input
                value={pickUpTime}
                onChange={(e) => setPickUp(e.target.value)}
                type='datetime-local'
                className='form-control'
              />
            </div>
            <div className='mb-2'>
              <label className='form-label'>Drop-off Time</label>
              <input
                value={dropOffTime}
                onChange={(e) => setDropOff(e.target.value)}
                type='datetime-local'
                className='form-control'
              />
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              data-bs-dismiss='modal'
              disabled={pickUpTime === '' || dropOffTime === ''}
              onClick={handleSubmit}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupModal;
