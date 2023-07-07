export const addCharacter = {
    type: "ADD_CHARACTER",
    payload: []
};

export const addFavorite = (id, name, image, gender) => {
    return { 
        type: "ADD_FAVORITE", 
        payload: { id: id, name: name, image: image, gender: gender } 
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

export const filterCards = (gender) => {
    return {
        type: "FILTER",
        payload: gender
    };
};

export const orderCards = (order) => {
    return { 
        type: "ORDER",
        payload: order
    };
};