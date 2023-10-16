import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSaves } from "../../store/savedRecipes"
import SavedRecipesIndex from "./SavedRecipesIndex"
import RecipeBoxNav from "./RecipeBoxNav"
import "./index.scss"

const RecipeBox = () => {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.session.user.id)

    useEffect(() => {
        dispatch(fetchSaves(userId))
    },[dispatch, userId])

    return(
        <>
            <div className="recipebox-component-wrapper">
                <div className="recipebox-nav-wrapper">
                    <RecipeBoxNav />
                </div>
                <div className="recipebox-index-wrapper">
                    <SavedRecipesIndex />
                </div>
            </div>
        </>
    )

}

export default RecipeBox
