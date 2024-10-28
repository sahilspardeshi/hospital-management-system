// src/app/redux/reducers/loginReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../loginActions';

const initialState = {
  loading: false,
  userData: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
