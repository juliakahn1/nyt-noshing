import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './RecipeItem.css'

const RecipeItem = ({ recipe }) => {
    // if saved, icon is this: https://cooking.nytimes.com/assets/save-ribbon-gray.svg
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
                            <div className="recipe-index-card-ratings-cooktime">
                                <div className="recipe-index-card-rating">
                                    <div className="recipe-index-card-stars">
                                        <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="recipe-index-card-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                        <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="recipe-index-card-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                        <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="recipe-index-card-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                        <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="recipe-index-card-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                        <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="recipe-index-card-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                                    </div>
                                    <div className="recipe-index-card-review-count">3</div>
                                </div>
                            <div className='recipe-index-card-cooktime'>{recipe.cookTime}</div>
                        </div>
                        <div className="recipe-index-card-save-action">
                            <button className="recipe-index-card-save-ribbon"></button>
                        </div>
                    </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default RecipeItem
