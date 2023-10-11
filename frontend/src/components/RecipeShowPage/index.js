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
                        
                    </div>
                </div>
            </div>
        </>
    ) : (<></>)
}

export default RecipeShowPage
