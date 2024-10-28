// src/app/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import accountReducer from './reducers/accountReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  login: loginReducer,
  // Add other reducers here
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  // Middleware can be added if needed
});

export default store;
