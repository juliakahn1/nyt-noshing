import RecipeBoxCategoryItem from "./RecipeBoxCategoryItem"
import "./RecipeBoxNav.scss"
import { useSelector } from "react-redux"

const RecipeBoxNav = ({ category, setCategory }) => {
  const savedRecipes = Object.values(useSelector(store => store.savedRecipes)).reverse()
  const recipeCategories = Array.from(new Set(savedRecipes
    .map(save => save.recipe)
    .map(recipe => recipe.tags)
    .flat()))

  let isSelected
  category === "all" ? isSelected = 'selected' : isSelected = ""

  return (
    <>
      <div className="recipebox-nav-saved-recipes-tab">
        <ul className="recipebox-nav-saved-recipes-ul">
          <li>
            <a
              className={`recipebox-nav-saved-recipes-a ${isSelected}`}
              onClick={() => setCategory("all")}>
              <span className="recipebox-nav-saved-recipes-tab-icon" />
              <span className="recipebox-nav-saved-recipes-tab-text">Saved Recipes</span>
              <span className="recipebox-nav-saved-recipes-tab-count">{savedRecipes.length}</span>
            </a>
          </li>
        </ul>
        <div className="recipebox-nav-category-container">
          <h3 className="recipebox-nav-category-header">by category</h3>
          <ul className="recipebox-nav-category-list">
            {recipeCategories.map((category) => {
              const taggedRecipes = savedRecipes
                .filter(sr => sr.recipe.tags.includes(category))
                .map(sr => sr.recipe)
              return (
                <li className={`recipebox-nav-category-tab`} key={Math.random()} onClick={() => setCategory(category)}>
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
