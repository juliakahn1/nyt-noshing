// --- ACTION CREATORS --- //

const RECEIVE_RECIPES = 'recipes/receiveRecipes'
export const RECEIVE_RECIPE = 'recipes/receiveRecipe'

export const receiveRecipes = (recipes) => {
    return {
        type: RECEIVE_RECIPES,
        recipes
    }
}

export const receiveRecipe = (payload) => {
    return {
        type: RECEIVE_RECIPE,
        payload // contains both recipe + notes
    }
}

// --- THUNK ACTIONS --- //

export const fetchRecipes = () => async (dispatch) => {
    const res = await fetch('/api/recipes')
    if (res.ok) {
        const recipes = await res.json()
        dispatch(receiveRecipes(recipes))
    }
}

export const fetchRecipe = (recipeId) => async (dispatch) => {
    // payload, because you're getting recipe AND notes
    const data = await fetch(`/api/recipes/${recipeId}`)
    if (data.ok) {
        const payload = await data.json()
        dispatch(receiveRecipe(payload))
    }
}

// --- REDUCER --- //


export const recipesReducer = (store = {}, action) => {
    switch (action.type) {
        case RECEIVE_RECIPES:
            return { ...store, ...action.recipes }
        case RECEIVE_RECIPE:
            return { ...store, [action.payload.recipe.id]: action.payload.recipe }
        default:
            return store
    }
}

export default recipesReducer
