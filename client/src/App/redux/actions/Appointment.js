import axiosInstanceApp from '../../axiosConfig';


// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';



export const login = (userId, password, onSuccess) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axiosInstanceApp.post('auth/login', { userId, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
 
      if (onSuccess) {
        CookieSet(response.data.accessToken,response.data.refreshToken)
        onSuccess(response.data);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      dispatch({ type: LOGIN_FAILURE, payload: errorMsg });
    }
  };
};

