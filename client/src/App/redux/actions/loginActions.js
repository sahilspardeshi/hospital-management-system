// src/app/redux/loginActions.js
import axios from 'axios';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk Action for login
export const login = (userId, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axiosInstanceApp.post('staff/staffLogin', { userId, password });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.response ? error.response.data : error.message));
    }
  };
};
