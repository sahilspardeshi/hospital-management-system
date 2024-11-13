import {
    PATINET_SEARCH_FAILURE,
    PATINET_SEARCH_REQUEST,
    PATINET_SEARCH_SUCCESS
    } from "../actions/PatientSearching.js";
    
    const initialState = {
      loading: false,
      patient: null,
      error: null,
    };
    export const PatientSearchingReducer = (state = initialState, action) => {
      switch (action.type) {
        case PATINET_SEARCH_REQUEST:
          return { ...state, loading: true, error: null };
    
        case PATINET_SEARCH_SUCCESS:
          return { ...state, loading: false, accountData: action.payload };
    
        case PATINET_SEARCH_FAILURE:
          return { ...state, loading: false, error: action.payload };
    
        default:
          return state;
      }
    };
    