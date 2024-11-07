import {
    FETCH_AD_REQUEST,
    FETCH_AD_SUCCESS,
    FETCH_AD_FAILURE,
  } from '../actions/adActions';
  
  const initialState = {
    loading: false,
    ad: null,
    error: null,
  };
  
  export const adReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_AD_REQUEST:
        return { ...state, loading: true };
      case FETCH_AD_SUCCESS:
        return {...state, loading: false, ad: action.payload, error: null };
      case FETCH_AD_FAILURE:
        return {...state, loading: false, ad: null, error: action.payload };
      default:
        return state;
    }
  };
  
  