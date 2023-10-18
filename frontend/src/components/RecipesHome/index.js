import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRecipes } from "../../store/recipes"
import RecipesHero from "./RecipesHero"
import RecipeItem from "./RecipeItem"
import "./RecipesHome.css"
import { fetchSaves } from "../../store/savedRecipes"

export const RecipesHome = () => {
    const dispatch = useDispatch()
    const recipes = useSelector(store => store.recipes)
    const recipesArr = Object.values(recipes) // empty arrays are still truthy
    const currentUser = useSelector(store => store.session.user)
    const babka = recipesArr.find(recipe => recipe.name === "Tsimmes")

    useEffect(() => {
        dispatch(fetchRecipes()) // state updates
        if (currentUser) dispatch(fetchSaves(currentUser.id)) // refactor to grab saved recipes from backend ***
    }, [dispatch, currentUser])

    return recipesArr.length > 0 ?
    (
        <>
            <RecipesHero recipe={babka} />
            <h2 className="recipes-index-pantry-header">Latest Recipes</h2>
            <ul className="recipes-index-pantry-tiles">
                { recipesArr.map( recipe => {
                    return (
                        <li key={Math.random()}>
                            <RecipeItem recipe={recipe} />
                        </li>)
                })}
            </ul>
        </>
    ) : (<></>)

}

export default RecipesHome
