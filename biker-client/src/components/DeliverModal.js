import React from 'react';
import { useDispatch } from 'react-redux';
import { deliverParcel } from '../state/actions/parcels';

const DeliverModal = ({ parcelId }) => {
  const dispatch = useDispatch();
  const hanldeDeliver = (id) => {
    dispatch(deliverParcel(parcelId));
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
            <h5 className='modal-title'>Confirm</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <p>Are you sure you want to mark this parcel as delivered?</p>
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
              onClick={hanldeDeliver}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverModal;
