import { ADD_CHARACTER } from "./actionTypes.js";

const initialState = {
	characters: [],
	favorites: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CHARACTER":
			// Buscar character y agregarlo al state
			return { ...state, characters: [...state.characters, action.payload] };
		case "ADD_FAVORITE":
			// Agregar Favorito
			return { ...state, favorites: [...state.favorites, action.payload] };
		case "DEL_FAVORITE":
			// Eliminar Favoritos
			return { ...state, favorites: state.favorites.filter((char) => char.id !== action.payload) };
		default:
			return { ...state };
	}
};

export default rootReducer;