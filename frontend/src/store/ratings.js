import csrfFetch from "./csrf"
import { fetchRecipe } from "./recipes"

const ADD_RATING = 'api/receiveRating'

export const addRating = (rating) => {
  return {
    type: ADD_RATING,
    rating
  }
}

export const createRating = (rating) => async (dispatch) => {
  const res = await csrfFetch('/api/ratings', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rating)
  })
  if (res.ok) {
    const rating = await res.json()
    dispatch(fetchRecipe(rating.recipe.id))
  }
}

// export const RatingsReducer = (store = {}, action) => {
//   switch (action.type) {
//     case RECEIVE_RECIPE: // I want this to force a recipe re-render
//       return { ...store, [action.rating.recipeId]: action.rating}
//     default:
//       return store
//   }
// }
