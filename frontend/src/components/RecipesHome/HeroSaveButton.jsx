// import React from "react"
// import { useDispatch } from "react-redux"
// import { createSave, deleteSave } from "../../store/savedRecipes"

// const HeroSaveButton = ({ sessionUser, savedRecipes, recipe }) => {
//     const dispatch = useDispatch()
//     let saveButton

//     const handleSave = (e) => {
//         e.preventDefault()
//         dispatch(createSave({
//             recipeId: recipe.id,
//             userId: sessionUser.id
//         }))
//     }

//     const handleUnsave = (e) => {
//         e.preventDefault()
//         dispatch(deleteSave(savedRecipes[recipe.id].id, sessionUser.id))
//     }

//     savedRecipes[recipe.id] ? saveButton = (
//         <>
//             <button
//                 className="recipe-index-hero-save-button"
//                 onClick={e => handleUnsave(e)}>
//                     <svg className="recipe-index-hero-button-icon" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#saved-ribbon_svg__a)"><path d="M5 3v14.235l5.5-3.49 4.542 2.882.357.227.601.381V3H5Z" fill="#fff"></path></g><defs><clipPath id="saved-ribbon_svg__a"><path fill="#fff" transform="translate(5 3)" d="M0 0h11v15H0z"></path></clipPath></defs></svg>
//                     <span className="recipe-index-hero-save-button-text">Saved</span>
//             </button>
//         </>
//     ) : saveButton = (
//         <>
//             <button className="recipe-index-hero-save-button"
//                 onClick={e => handleSave(e)}>
//                     <svg className="recipe-index-hero-button-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.706 4.294H6.294v10.587l4.206-2.669 4.206 2.67V4.293ZM5 3h11v14.235l-5.5-3.49-5.5 3.49V3Z" fill="#fff"></path></svg>
//                     <span className="recipe-index-hero-save-button-text">Save</span>
//             </button>
//         </>
//     )

//     return(
//         <>
//             { saveButton }
//         </>
//     )
// }
// export default HeroSaveButton
