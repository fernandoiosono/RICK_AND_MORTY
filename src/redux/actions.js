const getCharacters = {
    type: "GET_CHARACTERS"
};

const getFavorites = {
    type: "GET_FAVORITES"
};

const addCharacter = {
    type: "ADD_CHARACTER",
    payload: []
};

const addFavorite = {
    type: "ADD_FAVORITE",
    payload: []
};

const delCharacter = {
    type: "DEL_CHARACTER",
    payload: 0
};

const delFavorite = {
    type: "DEL_FAVORITE",
    payload: 0
};

export { 
    getCharacters,
    getFavorites,
    addCharacter,
    addFavorite,
    delCharacter,
    delFavorite
};