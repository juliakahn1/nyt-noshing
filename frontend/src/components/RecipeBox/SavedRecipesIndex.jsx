import React from "react"
import "./SavedRecipesIndex.scss"
import RecipeBoxNav from "./RecipeBoxNav"

const SavedRecipesIndex = ({ savedRecipes }) => {
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
                        <div className="saved-index-tiles-wrapper">
                            {/* reuse tile element here  */}
                        </div>
                    </div>
                </div>
            </div>
            <RecipeBoxNav />
        </>
    )

}

export default SavedRecipesIndex
