import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../../store/recipes.js';
import "./RecipeShowPage.scss"
import RatingsNotesSection from './RatingsNotesSection.js';
import RecipeData from './RecipeData.js';

const RecipeShowPage = () => {
    const { recipeId } = useParams()
    const dispatch = useDispatch()
    const recipe = useSelector(store => store.recipes[recipeId])

    useEffect(() => {
        dispatch(fetchRecipe(recipeId))
    }, [dispatch, recipeId])

    return recipe ? (
        <>
            <RecipeData recipe={recipe} />
            <RatingsNotesSection recipe={recipe} />
        </>
    ) : (<></>)
}

export default RecipeShowPage
