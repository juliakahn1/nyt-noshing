import React from "react"
import "./SavedRecipesIndex.scss"
import { useSelector } from "react-redux"
import RecipeBoxTile from "./RecipeBoxTile"

const SavedRecipesIndex = ({ category }) => {
  const savedRecipes = Object.values(useSelector(store => store.savedRecipes)).reverse() // saved recipe data (joins table)
  let header

  category === "all" ? header = (
    <h2 className="saved-index-header-title">Saved Recipes</h2>
  ) : header = (
    <h2 className="saved-index-header-title">
      <span className="saved-index-header-title saved-header">Saved Recipes</span>
      <span className="saved-index-header-title saved-category">{category}</span>
    </h2>
  )

  const recipesToDisplay = savedRecipes.filter(
    savedRecipe => savedRecipe.recipe.tags.includes(category) || category === "all"
  );

  return (
    <>
      <div className="saved-index-outer-container">
        <div className="saved-index-inner-container">
          <div className="saved-index-overflow-wrapper">
            <div className="saved-index-header-wrapper">
              <div className="saved-index-header">
                {header}
                <p className="saved-index-header-save-count">{recipesToDisplay.length} recipes</p>
              </div>
            </div>
            <ul className="saved-index-tiles-wrapper">
              {recipesToDisplay.map(savedRecipe => {
                return (
                  <li key={savedRecipe.id} className={`tile-list-wrapper`}>
                    <RecipeBoxTile savedRecipes={savedRecipes} savedRecipe={savedRecipe} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )

}

export default SavedRecipesIndex
