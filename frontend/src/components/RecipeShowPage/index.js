import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeShowPage = () => {
    const recipeId = useParams()
    // if logged in, go to show page, else trigger log in module
    return(
        <>
        </>
    )
}

export default RecipeShowPage
