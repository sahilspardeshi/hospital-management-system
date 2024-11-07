import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './reducers/accountReducer'; // Ensure this path is correct
import { adReducer } from './reducers/adReducer';


const rootReducer = combineReducers({
  account: accountReducer,
  advertisement: adReducer,
  // other reducers can be added here
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Customize default middleware if needed
});

export default store;
