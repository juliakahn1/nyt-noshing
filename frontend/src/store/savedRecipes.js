import csrfFetch from "./csrf"

export const RECEIVE_SAVES = "api/receiveSaves"
export const ADD_SAVE = "api/addSave"
export const REMOVE_SAVE = "api/removeSave"

export const receiveSaves = (saves) => {
    return {
        type: RECEIVE_SAVES,
        saves
    }
}

export const addSave = (save) => {
    return {
        type: ADD_SAVE,
        save
    }
}

export const removeSave = (saveId) => {
    return {
        type: REMOVE_SAVE,
        saveId
    }
}

export const fetchSaves = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/saved_recipes`)
    if (res.ok ) {
        const saves = await res.json()
        dispatch(receiveSaves(saves))
    }
}

export const createSave = (save) => async (dispatch) => { // SAVE HAS USERID INSIDE
    const res = await csrfFetch(`/api/users/${save.userId}/saved_recipes`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(save)
    })
    if (res.ok ) {
        const save = await res.json()
        dispatch(addSave(save))
    }
}

export const deleteSave = (noteId, userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/saved_recipes/${noteId}`,{
        method: "DELETE"
    })
    if (res.ok) {
        dispatch(removeSaves(noteId))
    }
}

export const savedRecipesReducer = (store = {}, action) => {
    switch (action.type) {
        case RECEIVE_SAVES:
            return { ...store, ...action.saves}
        case ADD_SAVE:
            return { ...store, [action.save.id]: action.save}
        case REMOVE_SAVE:
            const newState = { ...store }
            delete newState[action.saveId]
            return newState
        default:
            return store
    }
}
