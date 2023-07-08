export const addCharacter = (id) => {
    const jsonTemplate = "https://rickandmortyapi.com/api/character/";

    return function (dispatch) {
        fetch(jsonTemplate + id)
         .then((response) => response.json())
         .then((data) => 
            dispatch({
                type: "ADD_CHARACTER",
                payload: { id: data.id, name: data.name, image: data.image, gender: data.gender }
            })
        )
        // .catch((error) => console.log(error))
    };
};

export const addFavorite = (id, name, image, gender) => {
    return { 
        type: "ADD_FAVORITE", 
        payload: { id: id, name: name, image: image, gender: gender } 
    };
};

export const delFavorite = (id) => {
    return {
        type: "DEL_FAVORITE",
        payload: id
    };
};

export const filterFavorites = (gender) => {
    return {
        type: "FILTER_FAVORITES",
        payload: gender
    };
};

export const orderFavorites = (order) => {
    return { 
        type: "ORDER_FAVORITES",
        payload: order
    };
};

export const resetFilterFavorites = () => {
    return { type: "RESET_FILTER_FAVORITES" }
};

export const cleanState = () => {
    return { type: "CLEAN_STATE" };
};