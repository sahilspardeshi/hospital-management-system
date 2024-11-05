import axiosInstanceApp from '../../axiosConfig'; // Adjust path if needed

// Action Types
export const PATIENT_REGISTER_REQUEST = 'PATIENT_REGISTER_REQUEST';
export const PATIENT_REGISTER_SUCCESS = 'PATIENT_REGISTER_SUCCESS';
export const PATIENT_REGISTER_FAIL = 'PATIENT_REGISTER_FAIL';

export const submitPatientForm = (formData, file) => {
    return {
      type: 'SUBMIT_PATIENT_FORM',
      payload: {
        formData,
        file,
      },
    };
  };

  
// Action Creator
export const registerPatient = (patientData) => async (dispatch) => {
  dispatch({ type: PATIENT_REGISTER_REQUEST });
  try {
    const { data } = await axiosInstanceApp.post('/patients/create', patientData);
    dispatch({ type: PATIENT_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PATIENT_REGISTER_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
