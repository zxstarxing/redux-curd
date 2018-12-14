import {
    ADD_GAME_PENDING, ADD_GAME_FULFILLED, ADD_GAME_REJECTED,
    LOAD_GAME_PENDING, LOAD_GAME_FULFILLED, LOAD_GAME_REJECTED,
    REMOVE_GAME_PENDING, REMOVE_GAME_FULFILLED, REMOVE_GAME_REJECTED,
    FETCH_GAME_PENDING, FETCH_GAME_FULFILLED, FETCH_GAME_REJECTED,
    UPDATE_GAME_PENDING, UPDATE_GAME_FULFILLED, UPDATE_GAME_REJECTED
} from '../constants';

const initialSate = {
    error: null,
    isLoaded: false,
    games: []
}

const games = (state = initialSate, action) => {
    switch (action.type) {
        case ADD_GAME_PENDING:
            return Object.assign({}, state, {
                isLoaded: true,
            })
        case ADD_GAME_FULFILLED:
            return Object.assign({}, state, {
                isLoaded: false,
                games: [
                    ...state.games,
                    action.payload.data
                ]
            })
        case ADD_GAME_REJECTED:
            return Object.assign({}, state, {
                isLoaded: false,
                error: action.payload.message
            })
        case LOAD_GAME_PENDING:
            return Object.assign({}, state, {
                isLoaded: true,
                games: []
            })
        case LOAD_GAME_FULFILLED:
            return Object.assign({}, state, {
                isLoaded: false,
                games: action.payload.data
            })
        case LOAD_GAME_REJECTED:
            return Object.assign({}, state, {
                isLoaded: false,
                error: action.payload.message
            })
        case REMOVE_GAME_PENDING:
            return state;
        case REMOVE_GAME_FULFILLED:
            return Object.assign({}, state, {
                games: state.games.filter(item => item._id !== action.payload.data._id)
            })
        case REMOVE_GAME_REJECTED:
            return Object.assign({}, state, {
                error: action.payload.message
            })
        case FETCH_GAME_PENDING:
            return Object.assign({}, state, {
                isLoaded: true,
            })
        case FETCH_GAME_FULFILLED:
            let index = state.games.findIndex(item => item._id === action.payload.data._id);
            let games = (index !== -1
                ?
                state.games.map(item => item._id === action.payload.data._id ? action.payload.data : item)
                :
                [
                    ...state.games,
                    action.payload.data
                ]);
            return Object.assign({}, state, {
                isLoaded: false,
                games
            })
        case FETCH_GAME_REJECTED:
            return Object.assign({}, state, {
                isLoaded: false,
                error: action.payload.message
            })
        case UPDATE_GAME_PENDING:
            return Object.assign({}, state, {
                isLoaded: true,
            })
        case UPDATE_GAME_FULFILLED:
            let updateIndex = state.games.findIndex(item => item._id === action.payload.data._id);
            let updateGames = (updateIndex !== -1
                ?
                state.games.map(item => item._id === action.payload.data._id ? action.payload.data : item)
                :
                [
                    ...state.games,
                    action.payload.data
                ]);
            return Object.assign({}, state, {
                isLoaded: false,
                games:updateGames
            })
        case UPDATE_GAME_REJECTED:
            return Object.assign({}, state, {
                isLoaded: false,
                error: action.payload.message
            })
        default:
            return state;
    }
}

export default games;