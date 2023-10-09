import './RecipeItem.css'

const RecipeItem = ({ recipe }) => {
    return(
        <li>
            <div className="recipe-index-card-wrapper">
                <div className="recipe-index-card-image">

                </div>
                <div className="recipe-index-card-metadata">
                    <div className="recipe-index-card-name-author">
                        <h4 className="recipe-index-card-name">{recipe.name}</h4>
                        <p className="recipe-index-card-author">{recipe.author}</p>
                    </div>
                    <div className="recipe-index-card-details">
                        <div className="recipe-index-card-rating">
                            <div className="recipe-index-card-stars">
                                <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="recipecard_star__ChYwL recipecard_filledStar__gRBWI"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"></path></svg>
                                <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="recipecard_star__ChYwL recipecard_filledStar__gRBWI"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"></path></svg>
                                <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="recipecard_star__ChYwL recipecard_filledStar__gRBWI"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"></path></svg>
                                <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="recipecard_star__ChYwL recipecard_filledStar__gRBWI"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"></path></svg>
                                <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="recipecard_star__ChYwL recipecard_filledStar__gRBWI"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className="recipe-index-card-review-count">3</div>
                        </div>
                    <div className='recipe-index-card-cooktime'>{recipe.cookTime}</div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default RecipeItem
