import * as actionType from "./actionTypes.js";

const urlInfoChar = "https://rickandmortyapi.com/api/character/";

const formatUnknown = (param) => {
    return (!param || param === "unknown") ? "Unknown" : param;
};

export const userAuthentication = (isAuth) => {
	return {
		type: actionType.USER_AUTHENTICATION,
		payload: isAuth
	};
};

export const addCharacter = (id) => {
	return function (dispatch) {
		fetch(urlInfoChar + id)
			.then((response) => response.json())
			.then((data) =>
				dispatch({
					type: actionType.ADD_CHARACTER,
					payload: { 
						id: data.id, 
						name: data.name, 
						image: data.image, 
						gender: data.gender 
					}
				})
			);
	};
};

export const setCharacterDetail = (id) => {
    return function (dispatch) {
        fetch(urlInfoChar + id)
            .then((response) => response.json())
            .then((data) =>
                dispatch({
                    type: actionType.SET_CHARACTER_DETAIL,
                    payload: {
                        id: id,
                        name: data.name,
                        status: formatUnknown(data.status),
                        species: formatUnknown(data.species),
                        type: formatUnknown(data.type),
                        gender: formatUnknown(data.gender),
                        origin: formatUnknown(data.origin.name),
                        location: formatUnknown(data.location.name),
                        image: data.image,
                        created: formatUnknown(data.created)
                    }
                })
            );
    };
};

export const delCharacter = (id) => {
    return {
        type: actionType.DEL_CHARACTER,
        payload: id
    };
};

export const addFavorite = (id, name, image, gender) => {
	return {
		type: actionType.ADD_FAVORITE,
		payload: { 
			id: id, 
			name: name, 
			image: image, 
			gender: gender 
		}
	};
};

export const delFavorite = (id) => {
	return {
		type: actionType.DEL_FAVORITE,
		payload: id
	};
};

export const filterFavorites = (gender) => {
	return {
		type: actionType.FILTER_FAVORITES,
		payload: gender
	};
};

export const orderFavorites = (order) => {
	return {
		type: actionType.ORDER_FAVORITES,
		payload: order
	};
};

export const cleanFilterFavorites = () => {
	return { type: actionType.CLEAN_FILTER_FAVORITES };
};

export const cleanDetail = () => {
    return { type: actionType.CLEAN_DETAIL }
};

export const cleanState = () => {
	return { type: actionType.CLEAN_STATE };
};