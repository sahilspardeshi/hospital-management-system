import {
    CREATE_PROFILE_REQUEST,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE
} from "../actions/StaffProfileAction";


const initialState = {
    loading: false,
    profile: null,
    error: null,
};


export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROFILE_REQUEST:
            return { ...state, loading: false, error: null };

        case CREATE_PROFILE_SUCCESS:
            return { ...state, loading: false, profiledata: action.payload };

        case CREATE_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}