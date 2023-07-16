import parcelService from '../../services/parcel-service';
import {
  CREATE_PARCEL,
  CREATE_PARCEL_ERROR,
  CREATE_PARCEL_SUCCESS,
  FETCH_PARCELS,
  FETCH_PARCELS_ERROR,
  FETCH_PARCELS_SUCCESS,
} from './types';

export const fetchParcels = () => async (dispatch) => {
  dispatch({
    type: FETCH_PARCELS,
  });

  try {
    const res = await parcelService.getAll();
    dispatch({
      type: FETCH_PARCELS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_PARCELS_ERROR,
      payload: `Something's gone wrong.! ${e.message}`,
    });
  }
};

export const createParcel = (data, callback) => async (dispatch) => {
  dispatch({
    type: CREATE_PARCEL,
  });
  try {
    const res = await parcelService.create(data);
    dispatch({
      type: CREATE_PARCEL_SUCCESS,
      payload: res.data,
    });
    callback();
  } catch (e) {
    dispatch({
      type: CREATE_PARCEL_ERROR,
      payload: `Something's gone wrong.! ${e.message}`,
    });
  }
};
