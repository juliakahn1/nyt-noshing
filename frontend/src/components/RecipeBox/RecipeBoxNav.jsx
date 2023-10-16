import RecipeBoxCategoryItem from "./RecipeBoxCategoryItem"
import "./RecipeBoxNav.scss"
import { useSelector } from "react-redux"

const RecipeBoxNav = ({ setCategory }) => {
  const savedRecipes = Object.values(useSelector(store => store.savedRecipes)).reverse() // saved recipe data (joins table)
  // const recipesArr = Object.values(useSelector(store => store.recipes)) // from store
  // const savedRecipes = Object.values(useSelector(store => store.savedRecipes)).reverse() // from store


  const recipeCategories = Array.from(new Set(savedRecipes
    .map(s => s.recipe)
    .map(recipe => recipe.tags)
    .flat()))

  console.log('recipeCategories', recipeCategories)

  return (
    <>
      <div className="recipebox-nav-saved-recipes-tab">
        <ul className="recipebox-nav-saved-recipes-ul">
          <li>
            <a className="recipebox-nav-saved-recipes-a" onClick={() => setCategory("all")}>
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
              const taggedRecipes = savedRecipes
                .filter(sr => sr.recipe.tags.includes(category))
                .map(sr => sr.recipe)
              return (
                <li className="recipebox-nav-category-tab" key={index} onClick={() => setCategory(category)}>
                  <RecipeBoxCategoryItem category={category} taggedRecipes={taggedRecipes} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default RecipeBoxNav
