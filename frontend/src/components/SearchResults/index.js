import React, { useEffect } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import RecipeItem from "../RecipesHome/RecipeItem"
import { useSelector, useDispatch } from "react-redux"
import { fetchRecipes } from "../../store/recipes"
import { fetchSaves } from "../../store/savedRecipes"
import "./SearchResults.scss"

const SearchResults = () => {
  const dispatch = useDispatch()
  let recipeNames;
  let queriedRecipeNames;
  let resultsIndex
  let searchHeader
  let recipeResults
  const { query } = useParams()
  const recipesArr = Object.values(useSelector(store => store.recipes))

  if (recipesArr) recipeNames = recipesArr.map(recipe => recipe.name)

  if (query.length > 0 ) {
    queriedRecipeNames = recipeNames.filter(recipe => {
      return (recipe.toLowerCase()).match(query.toLowerCase())
    })

    recipeResults = queriedRecipeNames.map(name => {
      return recipesArr.find(recipe => recipe.name === name)
    })
  }

  if (queriedRecipeNames.length > 0) {
    searchHeader = (
      <>
        <div className="search-header-results">
          <h2>search results</h2>
          <p>{queriedRecipeNames.length} {query} results</p>
        </div>
      </>
    )
    resultsIndex = (
      <>
        <ul className="search-index-pantry-tiles">
          { recipeResults.map (recipe => {
            return (
              <li key={Math.random()} className="search-item">
                <RecipeItem recipe={recipe} />
              </li>
            )
          })}
        </ul>
      </>
    )
  } else {
    searchHeader = (
      <>
        <div className="search-header-no-results">
          <h2>Sorry, no results were found for "{query}"</h2>
          <p>Check your spelling or adjust your search term.</p>
        </div>
      </>
    )
    resultsIndex = (<></>)
  }

  useEffect(() => {
    dispatch(fetchRecipes())
    dispatch(fetchSaves())
  }, [dispatch])

  return (
    <>
      <div className="search-wrapper">
        { searchHeader }
        { resultsIndex }
      </div>
    </>
  )
}

export default SearchResults
