import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SavedRecipesIndex from "./SavedRecipesIndex"
import { fetchSaves } from "../../store/savedRecipes"
import RecipeBoxNav from "./RecipeBoxNav"

const RecipeBox = () => {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.session.user.id)
    const savedRecipes = Object.values(useSelector(store => store.savedRecipes))

    useEffect(() => {
        dispatch(fetchSaves(userId))
    },[dispatch, userId])

    return(
        <>
            <SavedRecipesIndex savedRecipes={savedRecipes}/>
        </>
    )

}

export default RecipeBox
