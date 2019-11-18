import { combineReducers } from "redux";

import episodesReducer from './episodes/reducers';
import charactersReducer from './characters/reducers';

export default combineReducers({
    episodesReducer,
    charactersReducer
});