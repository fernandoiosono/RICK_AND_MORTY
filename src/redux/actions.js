export const getCharacters = {
    type: "GET_CHARACTERS"
};

export const getFavorites = {
    type: "GET_FAVORITES"
};

export const addCharacter = {
    type: "ADD_CHARACTER",
    payload: []
};

export const addFavorite = (id, name, image) => {
    return { 
        type: "ADD_FAVORITE", 
        payload: { id: id, name: name, image: image } 
    };
};

export const delCharacter = {
    type: "DEL_CHARACTER",
    payload: 0
};

export const delFavorite = (id) => {
    return {
        type: "DEL_FAVORITE",
        payload: id
    };
};