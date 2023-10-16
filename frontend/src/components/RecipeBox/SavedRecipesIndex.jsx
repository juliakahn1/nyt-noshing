import React from "react"
import "./SavedRecipesIndex.scss"
import { useSelector } from "react-redux"
import RecipeBoxTile from "./RecipeBoxTile"

const SavedRecipesIndex = () => {
  const recipesArr = Object.values(useSelector(store => store.recipes))
  const savedRecipes = Object.values(useSelector(store => store.savedRecipes)).reverse() // subscribes

  return (
    <>
      <div className="saved-index-outer-container">
        <div className="saved-index-inner-container">
          <div className="saved-index-overflow-wrapper">
            <div className="saved-index-header-wrapper">
              <div className="saved-index-header">
                <h2 className="saved-index-header-title">Saved Recipes</h2>
                <p className="saved-index-header-save-count">{savedRecipes.length} recipes</p>
              </div>
            </div>
            <ul className="saved-index-tiles-wrapper">
              {savedRecipes.map(data => {
                if (recipesArr.some(recipe => data.recipeId === recipe.id)) {
                  return (
                    <li key={data.id} className="tile-list-wrapper">
                      <RecipeBoxTile savedRecipes={savedRecipes} recipe={
                        recipesArr.find(recipe => data.recipeId === recipe.id)
                      } />
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )

}

export default SavedRecipesIndex
