import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createRating, updateRating } from "../../store/ratings";
import { fetchRecipe } from "../../store/recipes";
import { deleteRating } from "../../store/ratings"

const RatingStarRadios = ({ recipe }) => {
  const dispatch = useDispatch()
  const [hover, setHover] = useState(0)

  const currentUser = useSelector(store => store.session?.user)
  const recipeRating = useSelector(store => store.recipes[recipe.id]?.currentUserRating)
  const recipeRatingId = useSelector(store => store.recipes[recipe.id]?.currentUserRatingId)

  let starDisplay;

  const setRating = (e, index) => {
    e.preventDefault()
    if (recipeRating) { // if PATCH
      debugger
      dispatch(updateRating({
        recipeId: recipe.id,
        score: index,
        userId: currentUser.id,
        id: recipeRatingId
      }))
    } else {
      dispatch(createRating({ // if POST
        recipeId: recipe.id,
        score: index,
        userId: currentUser.id
      }))
    }
  }

  const clearRating = (e) => {
    e.preventDefault()
    dispatch(deleteRating(recipe.currentUserRatingId, recipe.id))
  }

  return (
    <>
      <div className="show-recipe-your-rating-wrapper">
        <div className="show-recipe-rating-title-clear-wrapper">
          <h4 className="show-recipe-your-rating-header">Your rating</h4>
          {recipeRating ? <button className="clear-rating-button" onClick={clearRating}>Clear</button> : <></>}
        </div>
        <div className="show-recipe-your-rating-stars-wrapper">
          <form className="show-recipe-your-rating-stars-form">
            <div role="radiogroup" className="show-recipe-interactive-stars">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <svg
                    key={index}
                    className={index <= (hover || recipeRating) ? "unrated-star hovering" : "unrated-star not-hovering"}
                    onClick={(e) => setRating(e, index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(0)}
                    viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path>
                  </svg>
                )
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RatingStarRadios
