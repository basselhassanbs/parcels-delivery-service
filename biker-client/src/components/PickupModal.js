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
      class='modal fade'
      id='modal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog modal-dialog-centered'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title'>Pick up parcel</h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body'>
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
          <div class='modal-footer'>
            <button
              type='button'
              class='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button
              type='button'
              class='btn btn-primary'
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
