// import rootReducer from "./reducer.js";
// import { addCharacter } from "./actions.js";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer: rootReducer
// });

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;