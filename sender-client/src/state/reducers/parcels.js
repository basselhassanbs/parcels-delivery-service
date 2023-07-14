import {
  CREATE_PARCEL,
  FETCH_PARCELS,
  FETCH_PARCELS_ERROR,
  FETCH_PARCELS_SUCCESS,
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
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default reducer;
