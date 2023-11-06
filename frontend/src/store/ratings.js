import csrfFetch from "./csrf"
import { fetchRecipe } from "./recipes"

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

export const updateRating = (rating) => async (dispatch) => {
  const res = await csrfFetch(`/api/ratings/${rating.id}`, {
    method: "PATCH",
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

export const deleteRating = (ratingId, recipeId) => async (dispatch) => {
  const res = await csrfFetch(`/api/ratings/${ratingId}`, {
    method: "DELETE",
  })
  if (res.ok) {
    dispatch(fetchRecipe(recipeId))
  }
}
