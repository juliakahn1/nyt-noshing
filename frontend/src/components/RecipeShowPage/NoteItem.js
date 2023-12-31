import { useSelector, useDispatch } from "react-redux"
import "./RecipeNoteItem.scss"
import { deleteNote } from "../../store/notes"
import EditNoteModal from "./EditNoteModal"
import { useState } from "react"

const NoteItem = ({ note, recipeId }) => {
  const dispatch = useDispatch()
  const [mountModal, setMountModal] = useState(false)

  let currentUser = useSelector(store => {
    return store.session.user ? store.session.user.id : null
  })

  let authorButtons
  (note.userId === currentUser) ? authorButtons = (
    <div className="show-note-item-buttons-wrapper">
      <button className="show-note-item-button" onClick={(e) => setMountModal(true)}>Edit</button>
      <button className="show-note-item-button" onClick={() => dispatch(deleteNote(note.id, recipeId))}>Delete</button>
    </div>
  ) : authorButtons = (<></>)

  let modal
  mountModal ? modal = (
    <EditNoteModal note={note} setMountModal={setMountModal} />
  ) : modal = (<></>)

  return (
    <>
      {modal}
      <div className="show-note-item-wrapper">
        <header className="show-note-item-header">
          <div className="show-note-item-name-timestamp">
            <h3 className="show-note-item-name">{note.name}</h3>
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
