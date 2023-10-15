import { NavLink } from "react-router-dom/cjs/react-router-dom"

const RecipeBoxTile = ( {recipe} ) => {
    return(
        <>
            <NavLink className="recipe-item-navlink" to={`/recipes/${recipe.id}`}>
                <div className="recipe-index-card-wrapper">
                    <figure className="recipe-index-card-image">
                        <img className="recipe-index-card-photo" src={recipe.photoUrl}/>
                    </figure>
                    <div className="recipe-index-card-metadata">
                        <div className="recipe-index-card-name-author">
                            <h4 className="recipe-index-card-name">{recipe.name}</h4>
                            <p className="recipe-index-card-author">{recipe.author}</p>
                        </div>
                        <div className="recipe-index-card-details">
                            <div className='recipe-index-card-cooktime'>{recipe.cookTime}</div>
                        </div>
                        <div className="recipe-index-card-save-action">
                            <button className="recipe-index-card-save-ribbon"></button>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default RecipeBoxTile
