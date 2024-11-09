import axiosInstanceApp from '../../axiosConfig'; // Adjust path if needed

// Action Types
export const PATIENT_REGISTER_REQUEST = 'PATIENT_REGISTER_REQUEST';
export const PATIENT_REGISTER_SUCCESS = 'PATIENT_REGISTER_SUCCESS';
export const PATIENT_REGISTER_FAIL = 'PATIENT_REGISTER_FAIL';
export const registerPatient = (formData, onSuccess) => async (dispatch) => {
  dispatch({ type: PATIENT_REGISTER_REQUEST });

  try {
    const response = await axiosInstanceApp.post('/patient/create', formData);
    
    dispatch({ type: PATIENT_REGISTER_SUCCESS, payload: response.data });
    
    // Call onSuccess with response data
    onSuccess(response.data);
  } catch (error) {
    dispatch({ type: PATIENT_REGISTER_FAIL, payload: error.message });
  }
};


// export const registerPatient = (patientData, file) => async (dispatch) => {
//   console.log(patientData); // Debugging: Check the structure of patientData
//   dispatch({ type: PATIENT_REGISTER_REQUEST });
//   try {
//     const formData = new FormData();
//     for (const key in patientData) {
//       formData.append(key, patientData[key]);
//     }
//     if (file) {
//       formData.append('file', file); // Append the file if it exists
//     }

//     // Send the formData, not patientData
//     const { data } = await axiosInstanceApp.post('/patient/create', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     dispatch({ type: PATIENT_REGISTER_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: PATIENT_REGISTER_FAIL,
//       payload: error.response ? error.response.data.message : error.message,
//     });
//   }
// };
