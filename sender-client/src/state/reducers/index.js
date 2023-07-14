import { combineReducers } from 'redux';
import auth from './auth';
import parcels from './parcels';

export default combineReducers({
  auth,
  parcels,
});
