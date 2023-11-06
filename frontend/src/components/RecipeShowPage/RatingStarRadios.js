import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createRating } from "../../store/ratings";
import { fetchRecipe } from "../../store/recipes";
import { deleteRating } from "../../store/ratings"

const RatingStarRadios = ({recipe}) => {
  const dispatch = useDispatch()
  const [hover, setHover] = useState(0)

  const currentUser = useSelector(store => store.session?.user)
  const recipeRating = useSelector(store => store.recipes[recipe.id]?.currentUserRating)

  let starDisplay;

  const setRating = (e, index) => {
    e.preventDefault()
    dispatch(createRating({
      recipeId: recipe.id,
      score: index,
      userId: currentUser.id
    }))
  }

  const clearRating = () => {
    dispatch(deleteRating(recipe.currentUserRatingId, recipe.id))
  }

  recipe.currentUserRating ? starDisplay = ( // if user has reviewed recipe
    <>
      {[...Array(5)].map((star, index) => {
        index += 1;
        if (recipe.currentUserRating >= index) {
          return (
            <svg className="your-rating-star red" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path>
            </svg>
          )
        } else {
          return (
            <svg className="your-rating-star" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path>
            </svg>
          )
        }
      })}
    </>
  ) : starDisplay = ( // if user has not reviewed recipe
    <>
      {[...Array(5)].map((star, index) => {
        index+=1;
        return (
          <svg
            key={index}
            className={index <= (hover) ? "unrated-star hovering" : "unrated-star not-hovering"}
            onClick={(e) => setRating(e, index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
            viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path>
          </svg>
        )
      })}
    </>
  )
  return (
    <>
      <div className="show-recipe-your-rating-wrapper">
        <div className="show-recipe-rating-title-clear-wrapper">
          <h4 className="show-recipe-your-rating-header">Your rating</h4>
          { recipeRating ? <button className="clear-rating-button" onClick={clearRating}>Clear</button> : <></> }
        </div>
        <div className="show-recipe-your-rating-stars-wrapper">
          <form className="show-recipe-your-rating-stars-form">
            <div role="radiogroup" className="show-recipe-interactive-stars">
              { starDisplay }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RatingStarRadios
