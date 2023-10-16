import RecipeBoxCategoryItem from "./RecipeBoxCategoryItem"
import "./RecipeBoxNav.scss"
import { useSelector } from "react-redux"

const RecipeBoxNav = () => {
    const recipesArr = Object.values(useSelector(store => store.recipes))
    const savedRecipes = Object.values(useSelector(store => store.savedRecipes)).reverse()
    const recipeTags = (recipesArr.map(recipe => recipe.tags).flat())
    const recipeCategories = removeDuplicates(recipeTags)

    function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    return(<>
        <div className="recipebox-nav-saved-recipes-tab">
            <ul className="recipebox-nav-saved-recipes-ul">
                <li>
                    <a className="recipebox-nav-saved-recipes-a">
                        <span className="recipebox-nav-saved-recipes-tab-icon"></span>
                        <span className="recipebox-nav-saved-recipes-tab-text">Saved Recipes</span>
                        <span className="recipebox-nav-saved-recipes-tab-count">{savedRecipes.length}</span>
                    </a>
                </li>
            </ul>
            <div className="recipebox-nav-category-container">
                <h3 className="recipebox-nav-category-header">by category</h3>
                <ul className="recipebox-nav-category-list">
                    {recipeCategories.map((category, index) => {
                        const taggedRecipes = recipesArr.filter(recipe => recipe.tags.includes(category))
                        return(
                            <li className="recipebox-nav-category-tab" key={index}>
                                <RecipeBoxCategoryItem category={category} taggedRecipes={taggedRecipes}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </>)
}

export default RecipeBoxNav
