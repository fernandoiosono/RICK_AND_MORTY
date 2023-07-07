const initialState = {
	allCharacters: [],
	favorites: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		// case "ADD_CHARACTER":
		// 	return { ...state, characters: [...state.characters, action.payload] };
		case "ADD_FAVORITE":
			return { ...state, 
				favorites: [...state.favorites, action.payload] };
			// return { ...state, 
			// 	favorites: [...state.allCharacters, action.payload], 
			// 	allCharacters: [...state.allCharacters] };
		// case "DEL_CHARACTER":
		// 	return { ...state, characters: state.characters.filter((char) => char.id !== action.payload) };
		case "DEL_FAVORITE":
			return { ...state, 
				favorites: state.favorites.filter((char) => char.id !== action.payload) };
		case "FILTER_CARDS":
			return;
		case "ORDER_CARDS":
			return;
		default:
			return { ...state };
	}
};

export default rootReducer;