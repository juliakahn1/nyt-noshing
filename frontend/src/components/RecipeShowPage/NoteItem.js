import { useSelector, useDispatch } from "react-redux"
import "./RecipeNoteItem.scss"
import { deleteNote } from "../../store/notes"
import EditNoteModal from "./EditNoteModal"
import { openModal } from "../../store/modals"

const NoteItem = ({ note, recipeId }) => {
    const dispatch = useDispatch()
    const modalState = useSelector(store => store.modals)

    let currentUser = useSelector(store => {
        return store.session.user ? store.session.user.id : null
    })

    let authorButtons
    (note.userId === currentUser) ? authorButtons = (
        <div className="show-note-item-buttons-wrapper">
            <button className="show-note-item-button" onClick={(e) => dispatch(openModal("editNote"))}>Edit</button>
            <button className="show-note-item-button" onClick={() => dispatch(deleteNote(note.id, recipeId))}>Delete</button>
        </div>
    ) : authorButtons = (<></>)

    let modal
    modalState["editNote"] ? modal = (
        <EditNoteModal note={note} />
    ) : modal = (<></>)

    return(
        <>
            { modal }
            <div className="show-note-item-wrapper">
                <header className="show-note-item-header">
                    <div className="show-note-item-name-timestamp">
                        <h3 className="show-note-item-name">{note.name}</h3>
                        <time className="show-note-item-timestamp">Time placeholder</time>
                    </div>
                </header>
                <div className="show-note-item-body">
                    <p className="show-note-item-body">{note.body}</p>
                </div>
                {authorButtons}
            </div>
        </>
    )
}

export default NoteItem
