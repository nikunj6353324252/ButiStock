import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import DataReducer from './DataReducer';

export default combineReducers({
  authState: authReducer,
  dataState: DataReducer,
});
