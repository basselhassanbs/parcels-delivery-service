import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createParcel } from '../state/actions/parcels';
import { useNavigate } from 'react-router-dom';

const NewParcel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [parcel, setParcel] = useState({
    description: '',
    pickUpAddress: '',
    dropOffAddress: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createParcel(parcel, () => {
        navigate('/');
      })
    );
    setParcel({
      description: '',
      pickUpAddress: '',
      dropOffAddress: '',
    });
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
            value={parcel.description}
            onChange={(e) =>
              setParcel({ ...parcel, description: e.target.value })
            }
            id='description'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='pick-up' className='form-label'>
            Pick-up Address
          </label>
          <input
            value={parcel.pickUpAddress}
            onChange={(e) =>
              setParcel({ ...parcel, pickUpAddress: e.target.value })
            }
            id='pick-up'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='drop-off' className='form-label'>
            Drop-off Address
          </label>
          <input
            value={parcel.dropOffAddress}
            onChange={(e) =>
              setParcel({ ...parcel, dropOffAddress: e.target.value })
            }
            id='drop-off'
            className='form-control'
          />
        </div>
        <button
          disabled={
            parcel.description === '' ||
            parcel.dropOffAddress === '' ||
            parcel.pickUpAddress === ''
          }
          className='btn btn-primary'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewParcel;
