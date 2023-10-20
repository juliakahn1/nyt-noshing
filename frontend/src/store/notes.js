import csrfFetch from "./csrf"
import { RECEIVE_RECIPE } from "./recipes.js"

export const RECEIVE_NOTES = 'api/receiveNotes'
export const ADD_NOTE = 'api/addNote'
export const EDIT_NOTE = 'api/editNote'
export const REMOVE_NOTE = 'api/removeNote'


export const receiveNotes = (notes) => {
  return {
    type: RECEIVE_NOTES,
    notes
  }
}

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    note
  }
}

export const editNote = (note) => {
  return {
    type: EDIT_NOTE,
    note
  }
}

export const removeNote = (noteId) => {
  return {
    type: REMOVE_NOTE,
    noteId
  }
}

export const fetchNotes = (recipeId) => async (dispatch) => {
  const res = await fetch(`/api/recipes/${recipeId}/notes`)
  if (res.ok) {
    const notes = await res.json()
    dispatch(receiveNotes(notes))
  }
}

export const createNote = (note, recipeId) => async (dispatch) => {
  const res = await csrfFetch(`/api/recipes/${recipeId}/notes`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  if (res.ok) {
    const note = await res.json()
    dispatch(addNote(note))
  }
  return res
}

export const updateNote = (note, noteId, recipeId) => async (dispatch) => {
  const res = await csrfFetch(`/api/recipes/${recipeId}/notes/${noteId}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  if (res.ok) {
    const note = await res.json()
    dispatch(editNote(note))
  }
  return res
}

export const deleteNote = (noteId, recipeId) => async (dispatch) => {
  const res = await csrfFetch(`/api/recipes/${recipeId}/notes/${noteId}`, {
    method: "DELETE"
  })
  if (res.ok) {
    dispatch(removeNote(noteId))
  }
}

export const notesReducer = (store = {}, action) => {
  switch (action.type) {
    case RECEIVE_RECIPE:
      return { ...store, ...action.payload.notes }
    case ADD_NOTE:
      return { ...store, [action.note.id]: action.note }
    case EDIT_NOTE:
      return { ...store, [action.note.id]: action.note }
    case REMOVE_NOTE:
      const newStore = { ...store }
      delete newStore[action.noteId]
      return newStore
    default:
      return store
  }
}

export default notesReducer
