// accountReducer.js
import {
    CREATE_ACCOUNT_REQUEST,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILURE,
  } from './../actions/accountActions';
  
  const initialState = {
    loading: false,
    accountData: null,
    error: null,
  };
  
  export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ACCOUNT_REQUEST:
        return { ...state, loading: true, error: null };
  
      case CREATE_ACCOUNT_SUCCESS:
        return { ...state, loading: false, accountData: action.payload };
  
      case CREATE_ACCOUNT_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  