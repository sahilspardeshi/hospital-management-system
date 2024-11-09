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
      return { ...state, loading: true, error: null };

    case PATIENT_REGISTER_SUCCESS:
      return { ...state, loading: false, accountData: action.payload };

    case PATIENT_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
