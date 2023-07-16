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
} from '../actions/types';

const INITIAL_STATE = {
  parcels: [],
  waitingParcels: [],
  loading: false,
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PARCELS:
      return { loading: true, error: null, parcels: [] };
    case FETCH_PARCELS_SUCCESS:
      return { loading: false, error: null, parcels: action.payload };
    case FETCH_PARCELS_ERROR:
      return { loading: false, error: action.payload, parcels: [] };
    case FETCH_WAITING_PARCELS:
      return { loading: true, error: null, waitingParcels: [] };
    case FETCH_WAITING_PARCELS_SUCCESS:
      return { loading: false, error: null, waitingParcels: action.payload };
    case FETCH_WAITING_PARCELS_ERROR:
      return { loading: false, error: action.payload, waitingParcels: [] };
    case PICKUP_PARCEL:
      return { ...state, loading: true, error: null };
    case PICKUP_PARCEL_SUCCESS:
      return {
        ...state,
        loading: false,
        waitingParcels: state.waitingParcels.filter(
          (p) => p._id !== action.payload
        ),
      };
    case PICKUP_PARCEL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELIVER_PARCEL:
      return { ...state, loading: true, error: null };
    case DELIVER_PARCEL_SUCCESS:
      return {
        ...state,
        loading: false,
        parcels: state.parcels.map((p) =>
          p._id === action.payload ? { ...p, status: 'delivered' } : p
        ),
      };
    case DELIVER_PARCEL_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
