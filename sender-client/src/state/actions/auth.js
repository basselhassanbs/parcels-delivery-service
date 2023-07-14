import authService from '../../services/auth-service';
import { AUTH_ERROR, AUTH_USER } from './types';

export const signin = (data, callback) => async (dispatch) => {
  try {
    const res = await authService.signin(data);
    dispatch({
      type: AUTH_USER,
      payload: res.data.token,
    });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credentials',
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  };
};
