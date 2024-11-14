import axiosInstanceApp from "../../axiosConfig";

export const APPOINTMENT_SEARCH_REQUEST = 'APPOINTMENT_SEARCH_REQUEST';
export const APPOINTMENT_SEARCH_SUCCESS = 'APPOINTMENT_SEARCH_SUCCESS';
export const APPOINTMENT_SEARCH_FAILURE = 'APPOINTMENT_SEARCH_FAILURE';

export const AppointmentSearch = (query, onSuccess) => {
    console.log(query)
    return async (dispatch) => {
      dispatch({ type: APPOINTMENT_SEARCH_REQUEST });
      try {
        const response = await axiosInstanceApp.post(`patient/getByName/${query}`);
       
        dispatch({ type: APPOINTMENT_SEARCH_SUCCESS, payload: response.data });
   
        if (onSuccess) {
          onSuccess(response.data);
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message || error.message;
        dispatch({ type: APPOINTMENT_FAILURE, payload: errorMsg });
      }
    };
  };