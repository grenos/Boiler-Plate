import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import apiCallsReducer from './apiCallsReducer';

export default combineReducers({
  apiReducer: apiCallsReducer,
  router: routerReducer
});
