const RecipeBoxCategoryItem = ({ category, taggedRecipes}) => {
  return(
    <>
      <img className="recipe-box-category-tab-image" src={taggedRecipes[0].photoUrl} />
      <div className="recipe-box-category-tab-data">
        <span className="category-name">{category}</span>
        <span className="tab-count">{taggedRecipes.length}</span>
      </div>
    </>
  )
}

export default RecipeBoxCategoryItem
