import { NavLink } from "react-router-dom/cjs/react-router-dom"
import { deleteSave } from "../../store/savedRecipes"
import { useDispatch, useSelector } from "react-redux"
import "./RecipeBoxTile.scss"

const RecipeBoxTile = ( {recipe, savedRecipes} ) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const handleUnsave = (e) => {
        e.preventDefault()
        const save = savedRecipes.find(data => data.recipeId === recipe.id)
        dispatch(deleteSave(save.id, sessionUser.id))
    }

    return(
        <>
            <NavLink className="recipe-item-navlink" to={`/recipes/${recipe.id}`}>
                <div className="saved-index-card-wrapper">
                    <figure className="saved-index-card-image">
                        <img className="saved-index-card-photo" alt="recipe" src={recipe.photoUrl}/>
                    </figure>
                    <div className="saved-index-card-metadata">
                        <div className="saved-index-card-name-author">
                            <h4 className="saved-index-card-name">{recipe.name}</h4>
                            <p className="saved-index-card-author">{recipe.author}</p>
                        </div>
                        <div className="saved-index-card-details">
                            <div className='saved-index-card-cooktime'>{recipe.cookTime}</div>
                            <div className="saved-index-card-save-action">
                                <button className="saved-index-card-save-ribbon" onClick={(e) => handleUnsave(e)}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default RecipeBoxTile
