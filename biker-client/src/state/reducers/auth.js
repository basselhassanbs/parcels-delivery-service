import { AUTH_ERROR, AUTH_USER } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload, error: '' };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
