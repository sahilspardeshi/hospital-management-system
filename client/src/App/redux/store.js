// src/app/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import accountReducer from './reducers/accountReducer';
import loginReducer from './reducers/loginReducer';
import { patientReducer } from './reducers/patientReducer';

const rootReducer = combineReducers({

  login: loginReducer,
  patient: patientReducer,
  // Add other reducers here
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  // Middleware can be added if needed
});

export default store;
