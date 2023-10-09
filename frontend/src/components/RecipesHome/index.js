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
            { recipesArr.slice(1, recipesArr.length - 1).map( recipe => {
                return <RecipeItem recipe={recipe} />
            })}
        </>
    ) :
    (<></>)

}

export default RecipesHome
