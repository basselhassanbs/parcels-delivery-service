import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createParcel } from '../state/actions/parcels';

const NewParcel = () => {
  const [description, setDescription] = useState('');
  const [pickUpAddress, setPickUp] = useState('');
  const [dropOffAddress, setDropOff] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createParcel({
        description,
        pickUpAddress,
        dropOffAddress,
      })
    );
  };
  return (
    <div>
      <h3>Add new parcel</h3>
      <form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id='description'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='pick-up' className='form-label'>
            Pick-up Address
          </label>
          <input
            value={pickUpAddress}
            onChange={(e) => setPickUp(e.target.value)}
            id='pick-up'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='drop-off' className='form-label'>
            Drop-off Address
          </label>
          <input
            value={dropOffAddress}
            onChange={(e) => setDropOff(e.target.value)}
            id='drop-off'
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default NewParcel;
