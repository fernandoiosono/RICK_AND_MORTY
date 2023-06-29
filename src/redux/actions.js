import { 
    ADD_CHARACTER, 
    ADD_FAVORITE, 
    DEL_FAVORITE } from "./actionTypes.js"

const addCharacter = {
    type: ADD_CHARACTER,
    payload: []
};

const addFavorite = {
    type: ADD_FAVORITE,
    payload: []
};

const delFavorite = {
    type: DEL_FAVORITE,
    payload: 0
};

export { 
    addCharacter,
    addFavorite,
    delFavorite
};