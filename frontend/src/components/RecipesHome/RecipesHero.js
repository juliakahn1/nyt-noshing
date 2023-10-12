import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import "./RecipesHero.css"
import { useSelector } from "react-redux"

const RecipesHero = ({ recipe }) => {
    const sessionUser = useSelector(state => state.session.user)
    let showPageAccess;

    sessionUser ? showPageAccess = ( // signed in
        <>
        <NavLink className="nav-link" to={`/recipes/${recipe.id}`}>
            <p className="recipe-index-hero-byeline">recipe of the day</p>
            <h2 className='recipe-index-hero-name'>{recipe.name}</h2>
        </NavLink>
        </>
    ) : showPageAccess = ( // TODO: add STORE UI: MODAL STATE FOR EACH MODAL
        <NavLink className="nav-link" to={`/recipes/${recipe.id}`}>
            <p className="recipe-index-hero-byeline">recipe of the day</p>
            <h2 className='recipe-index-hero-name'>{recipe.name}</h2>
        </NavLink>
    )
    return(
        <>
            <div className="recipe-index-hero-wrapper">
                <div className="recipe-index-hero-image">
                    <img className="recipe-index-hero-image-photo" src={recipe.photoUrl}></img>
                </div>
                <div className="recipe-index-hero-content">
                    {showPageAccess}
                    <h3 className='recipe-index-hero-author'>By {recipe.author}</h3>
                    <p className='recipe-index-hero-blurb'>
                        We totally disagree that Jerry and Elaine consider cinnamon babka the "lesser babka" between it and its chocolate
                        counterpart. We can't, however, endorse Jerry's black and white cookie.
                    </p>
                    <button className="recipe-index-hero-save-button">Save
                        {/* <span className="recipe-index-hero-save-button-text">Save</span> */}
                        <svg className="recipe-index-hero-button-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.706 4.294H6.294v10.587l4.206-2.669 4.206 2.67V4.293ZM5 3h11v14.235l-5.5-3.49-5.5 3.49V3Z" fill="#fff"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )

}

export default RecipesHero
