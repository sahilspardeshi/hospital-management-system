import axiosInstanceApp from "../../axiosConfig";

export const STAFF_SEARCH_REQUEST = 'APPOINTMENT_SEARCH_REQUEST';
export const STAFF_SEARCH_SUCCESS = 'APPOINTMENT_SEARCH_SUCCESS';
export const STAFF_SEARCH_FAILURE = 'APPOINTMENT_SEARCH_FAILURE';

export const CREATE_PROFILE_REQUEST = 'CREATE_PROFILE_REQUEST';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE';


export const createProfile = (formData , onSuccess) => async (dispatch)=> {
    dispatch({type: CREATE_PROFILE_REQUEST});

    try{
        const response = await axiosInstanceApp.post('/staff/create', formData);
        dispatch({type: CREATE_PROFILE_SUCCESS , payload: response.data});
        onSuccess(response.data);
    }catch(error){
        dispatch({type: CREATE_PROFILE_FAILURE , payload: error.message});
    }
}
export const StaffSearch = (name, onSuccess) => {
    console.log(name); // Corrected log
    return async (dispatch) => {
      dispatch({ type: STAFF_SEARCH_REQUEST });
      try {
        const response = await axiosInstanceApp.post('/staff/getByName', { name });
  
        dispatch({ type: STAFF_SEARCH_SUCCESS, payload: response.data });
  
        if (typeof onSuccess === 'function') {
          onSuccess(response.data);
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message || "Something went wrong. Please try again.";
        dispatch({ type: STAFF_SEARCH_FAILURE, payload: errorMsg });
        // Optionally log the error
        console.error("Error in StaffSearch:", errorMsg);
      }
    };
  };