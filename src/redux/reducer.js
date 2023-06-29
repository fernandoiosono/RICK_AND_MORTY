import { ADD_CHARACTER } from "./actionTypes.js";

const initialState = {
    characters: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHARACTER":
            // Buscar character y agregarlo al state
        default:
            return { ...state };
    };
};

export default rootReducer;