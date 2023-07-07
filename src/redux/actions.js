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

export const filterCards = (gender) => {
    return {
        type: "FILTER_CARDS",
        payload: gender
    };
};

export const orderCards = (order) => {
    return { 
        type: "ORDER_CARDS",
        payload: order
    };
};