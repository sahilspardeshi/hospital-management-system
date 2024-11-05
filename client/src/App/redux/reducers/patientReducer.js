import {
  PATIENT_REGISTER_REQUEST,
  PATIENT_REGISTER_SUCCESS,
  PATIENT_REGISTER_FAIL,
} from "../actions/patientActions";

const initialState = {
  loading: false,
  patient: null,
  error: null,
};

export const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATIENT_REGISTER_REQUEST:
      return { ...state, loading: true };
    case PATIENT_REGISTER_SUCCESS:
      return { loading: false, patient: action.payload, error: null };
    case PATIENT_REGISTER_FAIL:
      return { loading: false, error: action.payload, patient: null };
    case "SUBMIT_PATIENT_FORM":
      return {
        ...state,
        patientData: action.payload,
      };
    default:
      return state;
  }
};
