import { combineReducers } from 'redux';
import games from '../reducers/games';

var rootReducer = combineReducers({
    games
})

export default rootReducer;