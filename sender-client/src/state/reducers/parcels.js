import {
  CREATE_PARCEL,
  CREATE_PARCEL_ERROR,
  CREATE_PARCEL_SUCCESS,
  FETCH_PARCELS,
  FETCH_PARCELS_ERROR,
  FETCH_PARCELS_SUCCESS,
  START_LOADING,
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PARCELS:
      return { loading: true, error: null, data: [] };
    case FETCH_PARCELS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case FETCH_PARCELS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case CREATE_PARCEL:
      return { ...state, loading: true, error: null };
    case CREATE_PARCEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload],
      };
    case CREATE_PARCEL_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
