import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import sessionReducer from './session';
import recipesReducer from './recipes';
import notesReducer from './notes';
import modalsReducer from './modals';
import { savedRecipesReducer } from './savedRecipes';

const rootReducer = combineReducers({
    session: sessionReducer,
    recipes: recipesReducer,
    notes: notesReducer,
    modals: modalsReducer,
    savedRecipes: savedRecipesReducer
})

// set to difference store enhancers depending on if in prod
let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

// to be used by index.js in src to attach Redux store to React application
export default configureStore
