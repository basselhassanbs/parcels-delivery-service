import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deliverParcel, pickUpParcel } from '../state/actions/parcels';

const DeliverModal = ({ parcelId }) => {
  const dispatch = useDispatch();
  const hanldeDeliver = (id) => {
    dispatch(deliverParcel(parcelId));
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
            <h5 class='modal-title'>Confirm</h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body'>
            <p>Are you sure you want to mark this parcel as delivered?</p>
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
