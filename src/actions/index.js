import {ADD_GAME,LOAD_GAME,REMOVE_GAME,UPDATE_GAME, FETCH_GAME} from '../constants';
import * as GamesAPI from '../utils/GamesAPI';

export const add_game = (game) =>{
    return{
        type:ADD_GAME,
        payload:GamesAPI.push(game)
    }
}

export const load_games = ()=>{
    return {
        type:LOAD_GAME,
        payload:GamesAPI.getAll()
    }
}

export const remove_game=(id)=>{
    return {
        type:REMOVE_GAME,
        payload:GamesAPI.remove(id)
    }
}

export const update_game=(id,game)=>{
    return {
        type:UPDATE_GAME,
        payload:GamesAPI.update(id,game)
    }
}

export const fetch_game=(id)=>{
    return {
        type:FETCH_GAME,
        payload:GamesAPI.get(id)
    }
}