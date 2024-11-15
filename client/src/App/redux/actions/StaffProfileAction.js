import axiosInstanceApp from "../../axiosConfig";


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