import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSaves } from "../../store/savedRecipes"
import SavedRecipesIndex from "./SavedRecipesIndex"
import RecipeBoxNav from "./RecipeBoxNav"
import { fetchRecipes } from "../../store/recipes"
import { useState } from "react"
import "./index.scss"

const RecipeBox = () => {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.session.user.id)
    const [category, setCategory] = useState("all") // default all

    useEffect(() => {
        dispatch(fetchSaves(userId))
    }, [dispatch, userId])

    return (
        <>
            <div className="recipebox-component-wrapper">
                <div className="recipebox-nav-wrapper">
                    <RecipeBoxNav setCategory={setCategory} category={category}/>
                </div>
                <div className="recipebox-index-wrapper">
                    <SavedRecipesIndex category={category}/>
                </div>
            </div>
        </>
    )

}

export default RecipeBox
