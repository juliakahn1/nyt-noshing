import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRecipes } from "../../store/recipes"
import RecipesHero from "./RecipesHero"
import RecipeItem from "./RecipeItem"
import "./RecipesHome.css"

export const RecipesHome = () => {
    const dispatch = useDispatch()
    const recipes = useSelector(store => store.recipes)
    const recipesArr = Object.values(recipes) // empty arrays are still truthy

    useEffect(() => {
        dispatch(fetchRecipes()) // state updates
    }, [dispatch])

    return recipesArr.length > 0 ?
    (
        <>
            <RecipesHero recipe={recipesArr[0]} />
            <h2 className="recipes-index-pantry-header">Latest Recipes</h2>
            <ul className="recipes-index-pantry-tiles">
                { recipesArr.slice(1).map( recipe => {
                    return <RecipeItem recipe={recipe} />
                })}
            </ul>
        </>
    ) :
    (<></>)

}

export default RecipesHome
