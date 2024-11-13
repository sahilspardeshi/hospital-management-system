import axiosInstanceWeb from "../../axiosConfig";

export const FETCH_AD_REQUEST = 'FETCH_AD_REQUEST';
export const FETCH_AD_SUCCESS = 'FETCH_AD_SUCCESS';
export const FETCH_AD_FAILURE = 'FETCH_AD_FAILURE';

export const fetchAdvertisement = () => async (dispatch) => {
  dispatch({ type: FETCH_AD_REQUEST });

  try {
   
    const response = await axiosInstanceWeb.get(`/advertisement/getall_ad`);
    
  
    dispatch({ type: FETCH_AD_SUCCESS, payload: response.data });
  } catch (error) {
    
    dispatch({
      type: FETCH_AD_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};
