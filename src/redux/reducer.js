const initialState = {
	allFavorites: [],
	favorites: []
};

const cbOrder = (a, b) => {
	a.id - b.id;
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		// case "ADD_CHARACTER":
		// 	return { ...state, characters: [...state.characters, action.payload] };
		case "ADD_FAVORITE":
			// return { ...state, 
			// 	favorites: [...state.favorites, action.payload] };
			return { ...state, 
				allFavorites: [ ...state.allFavorites, action.payload ],
				favorites: [ ...state.allFavorites, action.payload ] };
		// case "DEL_CHARACTER":
		// 	return { ...state, characters: state.characters.filter((char) => char.id !== action.payload) };
		case "DEL_FAVORITE":
			return { ...state, 
				allFavorites: state.allFavorites.filter((char) => char.id !== action.payload),
				favorites: state.favorites.filter((char) => char.id !== action.payload) };
		case "FILTER":
			return { ...state,
				favorites: state.allFavorites.filter((char) => char.gender === action.payload) };
		case "ORDER":
			return {...state,
				favorites: (action.payload === "Ascending") ? [...state.allFavorites].sort((a, b) => a.id - b.id) : [...state.allFavorites].sort((a, b) => a.id - b.id).reverse() };
		default:
			return { ...state };
	}
};

export default rootReducer;