// --- ACTION CREATORS --- //

const RECEIVE_NOTES = 'api/receiveNotes'

export const receiveNotes = (notes) => {
    return {
        type: RECEIVE_NOTES,
        notes
    }
}

// --- THUNK ACTIONS --- //

export const fetchNotes = (recipeId) => async (dispatch) => {
    const res = await fetch(`/api/recipes/${recipeId}/notes`)
    if (res.ok) {
        const notes = await res.json()
        dispatch(receiveNotes(notes))
    }
}

// --- REDUCER --- //

export const notesReducer = (store = {}, action) => {
    switch (action.type) {
        case RECEIVE_NOTES:
            return { ...store, ...action.notes}
        default:
            return store
    }
}

export default notesReducer
