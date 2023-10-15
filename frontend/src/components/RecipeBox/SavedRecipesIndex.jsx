import React from "react"
import "./SavedRecipesIndex.scss"
import { useSelector } from "react-redux"
import RecipeBoxTile from "./RecipeBoxTile"

const SavedRecipesIndex = ({ savedRecipes }) => {
    const recipesHash = useSelector(store => store.recipes)

    // iterate through savedRecipes and index recipesAr recipesHash[go through their ids]
    return(
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
                            { savedRecipes.map(recipe => {
                                if (recipesHash[recipe.id]) {
                                    return (
                                        <li key={recipe.id} className="tile-list-wrapper">
                                            <RecipeBoxTile recipe={recipesHash[recipe.id]} />
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
