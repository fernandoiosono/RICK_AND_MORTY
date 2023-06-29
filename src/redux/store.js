import rootReducer from "./reducer.js";
import { addCharacter } from "./actions.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer
});

export default store;