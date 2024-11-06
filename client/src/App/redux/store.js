// src/app/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { patientReducer } from './reducers/patientReducer';
import { loginReducer } from './reducers/loginReducer';

const rootReducer = combineReducers({

  login:loginReducer ,
  patient: patientReducer,
  // Add other reducers here
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  // Middleware can be added if needed
});

export default store;
