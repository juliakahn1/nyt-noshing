import { useSelector, useDispatch } from "react-redux"
import "./RecipeNoteItem.scss"
import { deleteNote } from "../../store/notes"
import { useState } from "react"
import EditNoteModal from "./EditNoteModal"

const NoteItem = ({ note, recipeId }) => {
    const dispatch = useDispatch()
    const [noteModalOpen, setNoteModalOpen] = useState(false)

    let currentUser = useSelector(store => {
        return store.session.user ? store.session.user.id : null
    })

    let authorButtons
    (note.userId === currentUser) ? authorButtons = (
        <div className="show-note-item-buttons-wrapper">
            <button className="show-note-item-button" onClick={() => setNoteModalOpen(true)}>Edit</button>
            <button className="show-note-item-button" onClick={() => dispatch(deleteNote(note.id, recipeId))}>Delete</button>
        </div>
    ) : authorButtons = (<></>)

    let modal
    noteModalOpen ? modal = (
        <EditNoteModal
            noteModalOpen={noteModalOpen}
            setNoteModalOpen={setNoteModalOpen}
            note={note}
        />
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
