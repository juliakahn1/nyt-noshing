import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import "./RecipesHero.css"
import { useSelector, useDispatch } from "react-redux"
import { createSave, deleteSave } from "../../store/savedRecipes"

const RecipesHero = ({ recipe }) => {
    const sessionUser = useSelector(state => state.session.user)
    const savedRecipes = Object.values(useSelector(state => state.savedRecipes))
    const dispatch = useDispatch()
    let showPageAccess;
    let saveButton;

    const handleSave = (e) => {
        e.preventDefault()
        dispatch(createSave({
            recipeId: recipe.id,
            userId: sessionUser.id
        }))
    }

    const handleUnsave = (e) => {
        e.preventDefault()
        const save = savedRecipes.find(data => data.recipeId === recipe.id) // returns array
        dispatch(deleteSave(save.id, sessionUser.id))
    }

    sessionUser ? showPageAccess = ( // signed in
        <>
        <NavLink className="nav-link" to={`/recipes/${recipe.id}`}>
            <p className="recipe-index-hero-byeline">recipe of the day</p>
            <h2 className='recipe-index-hero-name'>{recipe.name}</h2>
        </NavLink>
        </>
    ) : showPageAccess = (
        <NavLink className="nav-link" to={`/recipes/${recipe.id}`}>
            <p className="recipe-index-hero-byeline">recipe of the day</p>
            <h2 className='recipe-index-hero-name'>{recipe.name}</h2>
        </NavLink>
    )

    savedRecipes.some(data => data.recipeId === recipe.id) ? saveButton = (
        <>
            <button
                className="recipe-index-hero-save-button"
                onClick={e => handleUnsave(e)}>
                    <svg className="recipe-index-hero-button-icon" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#saved-ribbon_svg__a)"><path d="M5 3v14.235l5.5-3.49 4.542 2.882.357.227.601.381V3H5Z" fill="#fff"></path></g><defs><clipPath id="saved-ribbon_svg__a"><path fill="#fff" transform="translate(5 3)" d="M0 0h11v15H0z"></path></clipPath></defs></svg>
                    <span className="recipe-index-hero-save-button-text">Saved</span>
            </button>
        </>
    ) : saveButton = (
        <>
            <button className="recipe-index-hero-save-button"
                onClick={e => handleSave(e)}>
                    <svg className="recipe-index-hero-button-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.706 4.294H6.294v10.587l4.206-2.669 4.206 2.67V4.293ZM5 3h11v14.235l-5.5-3.49-5.5 3.49V3Z" fill="#fff"></path></svg>
                    <span className="recipe-index-hero-save-button-text">Save</span>
            </button>
        </>
    )


    return(
        <>
            <div className="recipe-index-hero-wrapper">
                <div className="recipe-index-hero-image">
                    <img className="recipe-index-hero-image-photo" alt="recipe" src={recipe.photoUrl}></img>
                </div>
                <div className="recipe-index-hero-content">
                    { showPageAccess }
                    <h3 className='recipe-index-hero-author'>By {recipe.author}</h3>
                    <p className='recipe-index-hero-blurb'>
                        We totally disagree with Jerry and Elaine's opinion that cinnamon babka is the "lesser babka" between it and its chocolate
                        counterpart. And despite what Jerry might think, we will always endorse a black and white cookie.
                    </p>
                    { saveButton }
                </div>
            </div>
        </>
    )

}

export default RecipesHero
