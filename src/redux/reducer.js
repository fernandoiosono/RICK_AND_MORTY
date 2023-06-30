const initialState = {
	characters: [],
	favorites: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CHARACTERS":
			return { ...state.characters };
		case "GET_FAVORITES":
			return { ...state.favorites };
		case "ADD_CHARACTER":
			return { ...state, characters: [...state.characters, action.payload] };
		case "ADD_FAVORITE":
			return { ...state, favorites: [...state.favorites, action.payload] };
		case "DEL_CHARACTER":
			return { ...state, characters: state.characters.filter((char) => char.id !== action.payload) };
		case "DEL_FAVORITE":
			return { ...state, favorites: state.favorites.filter((char) => char.id !== action.payload) };
		default:
			return { ...state };
	}
};

export default rootReducer;