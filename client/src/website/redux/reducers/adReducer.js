import {
  FETCH_AD_REQUEST,
  FETCH_AD_SUCCESS,
  FETCH_AD_FAILURE,

  UPDATE_AD_REQUEST,
  UPDATE_AD_SUCCESS,
  UPDATE_AD_FAILURE,

  CREATE_AD_REQUEST,
  CREATE_AD_SUCCESS,
  CREATE_AD_FAILURE,

  DELETE_AD_REQUEST,
  DELETE_AD_SUCCESS,
  DELETE_AD_FAILURE,

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
      return { ...state, loading: false, ad: action.payload, error: null };
    case FETCH_AD_FAILURE:
      return { ...state, loading: false, ad: null, error: action.payload };

    case UPDATE_AD_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_AD_SUCCESS:
      return { ...state, loading: false, ad: action.payload, };
    case UPDATE_AD_FAILURE:
      return { ...state, loading: false, error: action.payload, };

      case CREATE_AD_REQUEST:
        return { ...state, loading: true, error: null };
      case CREATE_AD_SUCCESS:
        return { ...state, loading: false, ad: action.payload, };
      case CREATE_AD_FAILURE:
        return { ...state, loading: false, error: action.payload, };
  
        case DELETE_AD_REQUEST:
          return { ...state, loading: true, error: null };
        case DELETE_AD_SUCCESS:
          return { ...state, loading: false, ad: state.ad.filter((ad) => ad._id !== action.payload), };
        case DELETE_AD_FAILURE:
          return { ...state, loading: false, error: action.payload, };
    
            
    default:
      return state;
  }
};

