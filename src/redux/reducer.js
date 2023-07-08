const initialState = {
	allCharacters: [],
	allFavorites: [],
	favorites: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_CHARACTER":
			return { ...state,
				allCharacters: [...state.allCharacters, action.payload ] };
		case "ADD_FAVORITE":
			return { ...state, 
				allFavorites: [ ...state.allFavorites, action.payload ],
				favorites: [ ...state.allFavorites, action.payload ] };
		case "DEL_FAVORITE":
			return { ...state, 
				allFavorites: state.allFavorites.filter((char) => char.id !== action.payload),
				favorites: state.favorites.filter((char) => char.id !== action.payload) };
		case "FILTER_FAVORITES":
			return { ...state,
				favorites: (action.payload) ? [...state.allFavorites].filter((char) => char.gender === action.payload)
					: [...state.allFavorites] };
		case "ORDER_FAVORITES":
			return {...state,
				favorites: (action.payload === "Ascending") ? [...state.favorites].sort((a, b) => a.id - b.id) 
					: ((action.payload === "Descending") ? [...state.favorites].sort((a, b) => a.id - b.id).reverse()
						: [...state.favorites]) };
		case "RESET_FILTER_FAVORITES":
			return {...state,
				favorites: state.allFavorites
			};
		case "CLEAN_STATE":
			return {...state,
				allCharacters: [],
				allFavorites: [],
				favorites: []
			}
		default:
			return { ...state };
	}
};

export default rootReducer;