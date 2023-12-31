const OPEN_MODAL = "modals/openModal"
const CLOSE_MODAL = "modals/closeModal"

export const openModal = (modalType) => {
    return {
        type: OPEN_MODAL,
        modalType
    }
}

export const closeModal = (modalType) => {
    return {
        type: CLOSE_MODAL,
        modalType
    }
}

export const modalsReducer = (store = { signup: null, login: null, sidePanel: null }, action ) => {
    switch(action.type) {
        case OPEN_MODAL:
            return { ...store, [action.modalType]: true }
        case CLOSE_MODAL:
            return { ...store, [action.modalType]: null }
        default:
            return store;
    }
}

export default modalsReducer
