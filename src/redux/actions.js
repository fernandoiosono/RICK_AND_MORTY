const ADD_CHARACTER = "ADD_CHARACTER";
const ADD_FAVORITE = "ADD_FAVORITE";
const DEL_FAVORITE = "DEL_FAVORITE";

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