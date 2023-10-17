import React, { useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../../store/recipes.js';
import "./RecipeShowPage.scss"
import RatingsNotesSection from './RatingsNotesSection.js';
import RecipeData from './RecipeData.js';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min.js';

const RecipeShowPage = () => {
    const { recipeId } = useParams()
    const dispatch = useDispatch()
    const recipe = useSelector(store => store.recipes[recipeId])
    const userId = useSelector(store => store.session?.user?.id)

    useEffect(() => {
        dispatch(fetchRecipe(recipeId))
    }, [dispatch, recipeId])

    if (!userId) return <Redirect to='/'/>

    return recipe ? (
        <>
            <RecipeData recipe={recipe} />
            <RatingsNotesSection recipe={recipe} />
        </>
    ) : (<></>)
}

export default RecipeShowPage
