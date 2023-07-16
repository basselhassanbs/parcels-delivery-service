import parcelService from '../../services/parcel-service';
import {
  DELIVER_PARCEL,
  DELIVER_PARCEL_ERROR,
  DELIVER_PARCEL_SUCCESS,
  FETCH_PARCELS,
  FETCH_PARCELS_ERROR,
  FETCH_PARCELS_SUCCESS,
  FETCH_WAITING_PARCELS,
  FETCH_WAITING_PARCELS_ERROR,
  FETCH_WAITING_PARCELS_SUCCESS,
  PICKUP_PARCEL,
  PICKUP_PARCEL_ERROR,
  PICKUP_PARCEL_SUCCESS,
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

export const fetchWaitingParcels = () => async (dispatch) => {
  dispatch({
    type: FETCH_WAITING_PARCELS,
  });

  try {
    const res = await parcelService.getAllWaiting();
    dispatch({
      type: FETCH_WAITING_PARCELS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_WAITING_PARCELS_ERROR,
      payload: `Something's gone wrong.! ${e.message}`,
    });
  }
};

export const pickUpParcel = (id, data) => async (dispatch) => {
  dispatch({
    type: PICKUP_PARCEL,
  });
  try {
    const res = await parcelService.pickup(id, data);
    dispatch({
      type: PICKUP_PARCEL_SUCCESS,
      payload: res.data._id,
    });
  } catch (e) {
    dispatch({
      type: PICKUP_PARCEL_ERROR,
      payload: `Something's gone wrong.! ${e.message}`,
    });
  }
};

export const deliverParcel = (id) => async (dispatch) => {
  dispatch({
    type: DELIVER_PARCEL,
  });
  try {
    const res = await parcelService.deliver(id);
    dispatch({
      type: DELIVER_PARCEL_SUCCESS,
      payload: res.data._id,
    });
  } catch (e) {
    dispatch({
      type: DELIVER_PARCEL_ERROR,
      payload: `Something's gone wrong.! ${e.message}`,
    });
  }
};
