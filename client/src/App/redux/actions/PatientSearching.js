import axiosInstanceApp from "../../axiosConfig";

export const PATINET_SEARCH_REQUEST = 'PATINET_SEARCH_REQUEST';
export const PATINET_SEARCH_SUCCESS = 'PATINET_SEARCH_SUCCESS';
export const PATINET_SEARCH_FAILURE = 'PATINET_SEARCH_FAILURE';

export const patientSearch = (query, onSuccess) => {
    console.log(query)
    return async (dispatch) => {
      dispatch({ type: PATINET_SEARCH_REQUEST });
      try {
        const response = await axiosInstanceApp.post(`patient/getByName/${query}`);
       
        dispatch({ type: PATINET_SEARCH_SUCCESS, payload: response.data });
   
        if (onSuccess) {
          onSuccess(response.data);
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message || error.message;
        dispatch({ type: PATINET_SEARCH_FAILURE, payload: errorMsg });
      }
    };
  };