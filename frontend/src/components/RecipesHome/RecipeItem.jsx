import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../store/modals'
import { createSave, deleteSave } from '../../store/savedRecipes'
import './RecipeItem.scss'

const RecipeItem = ({ recipe }) => {
  const currentUser = useSelector(store => store.session.user)
  const savedRecipes = Object.values(useSelector(state => state.savedRecipes))
  const dispatch = useDispatch()
  let saveRibbon

  const handleSave = (e) => {
    if (currentUser) {
      e.preventDefault()
      dispatch(createSave({
        recipeId: recipe.id,
        userId: currentUser.id
      }))
    } else {
      dispatch(openModal("login"))
    }
  }

  const handleUnsave = (e) => {
    e.preventDefault()
    const save = savedRecipes.find(data => data.recipeId === recipe.id) // returns array
    dispatch(deleteSave(save.id, currentUser.id))
  }

  savedRecipes.some(data => data.recipeId === recipe.id) ? saveRibbon = ( // if saved
    <>
      <button
        className="recipe-index-card-save-ribbon ribbon-saved"
        onClick={e => handleUnsave(e)}>
      </button>
    </>
  ) : saveRibbon = ( // if unsaved
    <>
      <button
        className="recipe-index-card-save-ribbon ribbon-unsaved"
        onClick={e => handleSave(e)}>
      </button>
    </>
  )

  const linkContent = (
    <div className="recipe-index-card-wrapper">
      <figure className="recipe-index-card-image">
        <img className="recipe-index-card-photo" alt="recipe-card" src={recipe.photoUrl} />
      </figure>
      <div className="recipe-index-card-metadata">
        <div className="recipe-index-card-name-author">
          <h4 className="recipe-index-card-name">{recipe.name}</h4>
          <p className="recipe-index-card-author">{recipe.author}</p>
        </div>
        <div className="recipe-index-card-details">
          <div className="recipe-index-card-ratings-cooktime">
            <div className="recipe-index-card-rating">
              <div className="recipe-index-card-stars">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  if (recipe.avgRating >= index) {
                    return (
                      <svg width="10" height="10" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"
                        className="recipe-index-card-star filled">
                        <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinejoin="round"></path>
                      </svg>
                    )
                  } else {
                    return (
                      <svg width="10" height="10" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"
                        className="recipe-index-card-star empty">
                        <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill-opacity=".25" stroke="currentColor" strokeWidth="0" strokeLinejoin="round"></path>
                      </svg>
                    )
                  }
                })}
              </div>
              <div className="recipe-index-card-review-count">{recipe.numRatings}</div>
            </div>
            <div className='recipe-index-card-cooktime'>{recipe.cookTime}</div>
          </div>
          <div className="recipe-index-card-save-action">
            {saveRibbon}
          </div>
        </div>
      </div>
    </div>
  );

  const handleLoggedOutClick = () => {
    dispatch(openModal("login"))
  }

  const link = currentUser ? (
    <NavLink className="recipe-item-navlink" to={`/recipes/${recipe.id}`}>
      {linkContent}
    </NavLink>
  ) : (
    <div className="recipe-item-navlink" onClick={() => handleLoggedOutClick()}>
      {linkContent}
    </div>
  )

  return (
    <>
      { link }
    </>
  )
}

export default RecipeItem
