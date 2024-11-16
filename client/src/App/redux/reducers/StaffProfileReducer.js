import {
    CREATE_PROFILE_REQUEST,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE,
    STAFF_SEARCH_REQUEST,
    STAFF_SEARCH_SUCCESS,
    STAFF_SEARCH_FAILURE
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
export const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case STAFF_SEARCH_REQUEST:
            return { ...state, loading: false, error: null };

        case STAFF_SEARCH_SUCCESS:
            return { ...state, loading: false, profiledata: action.payload };

        case STAFF_SEARCH_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}