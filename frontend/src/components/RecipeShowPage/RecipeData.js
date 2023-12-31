import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNotes } from "../../store/notes"
import { deleteSave, createSave } from "../../store/savedRecipes"

const RecipeData = ({ recipe }) => {
  const recipeIngredients = recipe.ingredients
  const recipePrepSteps = recipe.preparation
  const currentUser = useSelector(state => state.session.user)
  const savedRecipes = Object.values(useSelector(state => state.savedRecipes))
  let saveButton

  const dispatch = useDispatch()
  const notes = (useSelector(store => store.notes))
  const notesSubset = Object.values(notes).filter(note => note.recipeId === recipe.id)
  const numNotes = notesSubset.length

  useEffect(() => {
    dispatch(fetchNotes(recipe.id))
  }, [dispatch, recipe.id])

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(createSave({
      recipeId: recipe.id,
      userId: currentUser.id
    }))
  }

  const handleUnsave = (e) => {
    e.preventDefault()
    const save = savedRecipes.find(data => data.recipeId === recipe.id) // returns array
    dispatch(deleteSave(save.id, currentUser.id))
  }

  savedRecipes.some(data => data.recipeId === recipe.id) ? saveButton = (
    <>
      <button className="show-recipe-tools-save-button" onClick={e => handleUnsave(e)}>
        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#saved-ribbon_svg__a)"><path d="M5 3v14.235l5.5-3.49 4.542 2.882.357.227.601.381V3H5Z" fill="#fff"></path></g><defs><clipPath id="saved-ribbon_svg__a"><path fill="#fff" transform="translate(5 3)" d="M0 0h11v15H0z"></path></clipPath></defs></svg>
        <span className="show-recipe-tools-save-button-text">Saved</span>
      </button>
    </>
  ) : saveButton = (
    <>
      <button className="show-recipe-tools-save-button" onClick={e => handleSave(e)}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.706 4.294H6.294v10.587l4.206-2.669 4.206 2.67V4.293ZM5 3h11v14.235l-5.5-3.49-5.5 3.49V3Z" fill="#fff"></path></svg>
        <span className="show-recipe-tools-save-button-text">Save</span>
      </button>
    </>
  )


  return (
    <div className="show-grid-container">
      <div className="show-content">
        <div className="show-intro-header">
          <header className="show-recipe-name-author">
            <h1 className="show-recipe-name">{recipe.name}</h1>
            <h2 className="show-recipe-author">By {recipe.author}</h2>
          </header>
        </div>
        <div className="show-intro-image-wrapper">
          <div className="show-intro-recipe-image">
            <div className="show-intro-recipe-photo">
              <img className="show-intro-actual-photo" alt="recipe-card" src={recipe.photoUrl} />
            </div>
          </div>
        </div>
        <div className="show-recipe-stats-wrapper">
          <dl className="show-recipe-stats-table">
            <dt className="show-recipe-stats-table-row-label">Time</dt>
            <dd className="show-recipe-stats-table-row-data-cook-time">{recipe.cookTime}</dd>
            <dt className="show-recipe-stats-table-row-label">Rating</dt>
            <dd className="show-recipe-stats-table-row-data-rating">
              <span className="show-recipe-stats-table-row-data-avg-rating">{recipe.avgRating}</span>
              <span className="show-recipe-stats-table-row-data-avg-rating-stars">
              {[...Array(5)].map((star, index) => {
                  index += 1;
                  if (recipe.avgRating >= index) {
                    return (
                      <svg key={index} width="10" height="10" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"
                        className="show-recipe-stats-table-row-data-rating-star">
                        <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinejoin="round"></path>
                      </svg>
                    )
                  } else {
                    return (
                      <svg key={index} width="10" height="10" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"
                        className="show-recipe-stats-table-row-data-rating-star">
                        <path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fillOpacity=".25" stroke="currentColor" strokeWidth="0" strokeLinejoin="round"></path>
                      </svg>
                    )
                  }
                })}
              </span>
              <span className="show-recipe-stats-table-row-data-num-ratings">({recipe.numRatings})</span>
            </dd>
            <dt className="show-recipe-stats-table-row-label">Notes</dt>
            <dd className="show-recipe-stats-table-row-data-num-notes">
              <a className="show-recipe-stats-table-row-data-link-notes" href="#notes-beginning">
                Read {numNotes} community notes
                <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-recipe-stats-table-row-jump-icon"><path d="M2.895 4.167h5v9" stroke="currentColor" strokeWidth="1.25"></path><path d="m3.652 8.924 4.243 4.242 4.242-4.242" stroke="currentColor" strokeWidth="1.25"></path></svg>
              </a>
            </dd>
          </dl>
        </div>
        <div className="show-recipe-blurb-wrapper">
          <div className="show-recipe-blurb-inner-wrapper">
            <div className="show-recipe-blurb-text-container">
              <p className="show-recipe-blurb-text">{recipe.blurb}</p>
            </div>
          </div>
        </div>
        <ul className="show-recipe-tools-wrapper">
          <li>
            <div className="show-recipe-tools-button-wrapper">
              {saveButton}
            </div>
          </li>
        </ul>
        <div className="show-recipe-ingredients-wrapper">
          <div className="show-recipe-ingredients-inner-wrapper">
            <h2 className="show-recipe-header">ingredients</h2>
            <div className="show-recipe-ingredients-yield-wrapper">
              <span className="show-recipe-ingredients-yield">Yield:</span>
              <span className="show-recipe-ingredients-yield yield-data">{recipe.yield}</span>
            </div>
            <ul>
              {recipeIngredients.map((ingredient, index) => {
                return <li className="show-recipe-ingredients-item" key={index}>{ingredient}</li>
              })}
            </ul>
          </div>
        </div>
        <div className="show-recipe-prep-wrapper">
          <h2 className="show-recipe-header preparation-header">preparation</h2>
          <ul className="show-recipe-prep-list">
            {recipePrepSteps.map((step, index) => {
              return (
                <div className="show-recipe-prep-step-wrapper" key={index}>
                  <li className="show-recipe-prep-step step-num">Step {index + 1}</li>
                  <li className="show-recipe-prep-step step-content">{step}</li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeData
