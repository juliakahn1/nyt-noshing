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
