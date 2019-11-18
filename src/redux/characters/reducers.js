import {
    FETCH_CHARACTERS_REQUEST,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE
} from './actions';

const initialState = {
    data: [],
    isLoading: false,
    error: false,
    errorMsg: ''
};

const charactersReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case FETCH_CHARACTERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_CHARACTERS_SUCCESS:
            let arr = state.data.slice();
            action.payload.data.map(item=> arr[item.id] = item);
            return {
                ...state,
                isLoading: false,
                data: arr
            };
        case FETCH_CHARACTERS_FAILURE:
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

export default charactersReducer;