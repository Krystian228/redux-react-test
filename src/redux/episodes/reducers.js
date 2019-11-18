import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE,
} from './actions';

const initialState = {
    info: {},
    data: [],
    isLoading: false,
    error: false,
    errorMsg: ''
};

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_SUCCESS:
            let newState = [...state];
            newState.data= action.payload.data.results;
            newState.isLoading = false;
            newState.info = action.payload.data.info;
            return newState;
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMsg: action.payload.error
            };
        default:
            return state;
    }
}

export default episodesReducer;