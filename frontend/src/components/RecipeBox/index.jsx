import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SavedRecipesIndex from "./SavedRecipesIndex"
import { fetchSaves } from "../../store/savedRecipes"

const RecipeBox = () => {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.session.user.id)


    useEffect(() => {
        dispatch(fetchSaves(userId))
    },[dispatch, userId])

    return(
        <>
            <SavedRecipesIndex />
        </>
    )

}

export default RecipeBox
