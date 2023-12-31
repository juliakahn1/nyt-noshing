import React from "react"
import { useSelector } from "react-redux"
import RatingStarRadios from "./RatingStarRadios"
import NoteItem from "./NoteItem"
import NoteForm from "./NoteForm"

const RatingsNotesSection = ({ recipe }) => {
  const notes = useSelector(store => store.notes)
  const notesSubset = Object.values(notes).filter(note => note.recipeId === recipe.id)
  notesSubset.reverse()
  const numNotes = notesSubset.length

  return (
    <>
      <div className="show-ratings-notes-wrapper">
        <div className="show-ratings-wrapper">
          <h2 className="show-recipe-header">ratings</h2>
          <div className="show-recipe-avg-rating-wrapper">
            <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="store-recipe-avg-rating-big-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
            <div className="show-recipe-avg-rating-text">
              <h3 className="show-recipe-avg-rating-text avg-rating-score">{recipe.avgRating} out of 5</h3>
              <p className="show-recipe-avg-rating-text num-ratings">{recipe.numRatings} user ratings</p>
            </div>
          </div>
            <RatingStarRadios recipe={recipe} />
        </div>
        <div className="show-notes-wrapper">
          <h2 className="show-recipe-header">cooking notes</h2>
          <NoteForm recipeId={recipe.id} />
          <a id="notes-beginning"><h3 className="show-notes-header">All Notes ({numNotes})</h3></a>
          {notesSubset.map(note => {
            return <NoteItem key={note.id} note={note} recipeId={recipe.id} />
          })}
        </div>
      </div>
    </>
  )
}

export default RatingsNotesSection
