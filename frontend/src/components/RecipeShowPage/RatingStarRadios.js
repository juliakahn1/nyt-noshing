import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createRating } from "../../store/ratings";
import { fetchRecipe } from "../../store/recipes";

const RatingStarRadios = ({recipe}) => {
  let starDisplay;
  const dispatch = useDispatch()
  const currentUser = useSelector(store => store.session?.user)
  const [hover, setHover] = useState(0)

  const setRating = (e, index) => {
    e.preventDefault()
    dispatch(createRating({
      recipeId: recipe.id,
      score: index,
      userId: currentUser.id
    }))
  }

  // useEffect(() => {
  //   // rerender page if setRating is done
  // })

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
      <form className="show-recipe-your-rating-stars-form">
        <div role="radiogroup" className="show-recipe-interactive-stars">
          { starDisplay }
          {/* <input className="star-radio" id="star-1" name="rating" type="radio" value="1"></input>
          <label className="your-rating-star" title="1-star" focusable="false">
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
          </label>
          <input className="star-radio" id="star-2" name="rating" type="radio" value="2"></input>
          <label className="your-rating-star" title="2-star" focusable="false">
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
          </label>
          <input className="star-radio" id="star-3" name="rating" type="radio" value="3"></input>
          <label className="your-rating-star" title="3-star" focusable="false">
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
          </label>
          <input className="star-radio" id="star-4" name="rating" type="radio" value="4"></input>
          <label className="your-rating-star" title="4-star" focusable="false">
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
          </label>
          <input className="star-radio" id="star-5" name="rating" type="radio" value="5"></input>
          <label className="your-rating-star" title="5-star" focusable="false">
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
          </label> */}
        </div>
      </form>
    </>
  )
}

export default RatingStarRadios
