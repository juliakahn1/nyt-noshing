import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RecipeShowHero from "./RecipeShowHero.js"
import { fetchRecipe } from '../../store/recipes.js';
import "./RecipeShowPage.scss"

const RecipeShowPage = () => {
    const { recipeId } = useParams()
    const dispatch = useDispatch()
    const recipe = useSelector(store => store.recipes[recipeId])

    useEffect(() => {
        dispatch(fetchRecipe(recipeId))
    }, [dispatch])

    return recipe ? (
        <>
            {/* <RecipeShowHero recipe={recipe} /> */}
            <div className="show-grid-container">
                <div className="show-content">
                    <div className="show-intro-header">
                        <header className="show-recipe-name-author">
                            <h1 className="show-recipe-name">{recipe.name}</h1>
                            <h2 className="show-recipe-author">By {recipe.author}</h2>
                        </header>
                    </div>
                    <div className="show-intro-image-wrapper">
                        <div className="show-intro-recipe-image">
                            <div className="show-intro-recipe-photo">
                                <img className="show-intro-actual-phot" src="https://static01.nyt.com/images/2019/09/25/dining/23eggrex2/23eggrex2-master768.jpg?w=1280&q=75"></img>
                            </div>
                        </div>
                    </div>
                    <div className="show-recipe-stats-wrapper">
                        <dl className="show-recipe-stats-table">
                            <dt className="show-recipe-stats-table-row-label">Time</dt>
                            <dd className="show-recipe-stats-table-row-data-cook-time">{recipe.cookTime}</dd>
                            <dt className="show-recipe-stats-table-row-label">Rating</dt>
                            <dd className="show-recipe-stats-table-row-data-rating">
                                <span className="show-recipe-stats-table-row-data-avg-rating">5</span>
                                <span className="show-recipe-stats-table-row-data-avg-rating-stars">
                                    <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-recipe-stats-table-row-data-rating-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                    <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-recipe-stats-table-row-data-rating-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                    <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-recipe-stats-table-row-data-rating-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                    <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-recipe-stats-table-row-data-rating-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                    <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-recipe-stats-table-row-data-rating-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                </span>
                                <span className="show-recipe-stats-table-row-data-num-ratings">(12)</span>
                            </dd>
                            <dt className="show-recipe-stats-table-row-label">Notes</dt>
                            <dd className="show-recipe-stats-table-row-data-num-notes">
                                <a className="show-recipe-stats-table-row-data-link-notes" href="#notes-section">
                                    Read 3 community notes
                                    <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-recipe-stats-table-row-jump-icon"><path d="M2.895 4.167h5v9" stroke="currentColor" strokeWidth="1.25"></path><path d="m3.652 8.924 4.243 4.242 4.242-4.242" stroke="currentColor" strokeWidth="1.25"></path></svg>
                                </a>
                            </dd>
                        </dl>
                    </div>
                    <div className="show-recipe-blurb-wrapper">

                    </div>
                </div>
            </div>
        </>
    ) : (<></>)
}

export default RecipeShowPage
