import apiClient from '../../services/api-client';
import parcelService from '../../services/parcel-service';
import {
  CREATE_PARCEL,
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
      payload: `Something went wrong. ${e.message}`,
    });
  }
};

export const createParcel = (data) => async (dispatch) => {
  try {
    const res = await parcelService.create(data);
    dispatch({
      type: CREATE_PARCEL,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
