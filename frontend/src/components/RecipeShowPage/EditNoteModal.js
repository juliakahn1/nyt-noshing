import './EditNoteModal.scss'
import { useDispatch } from "react-redux"
import { useState } from 'react'
import { updateNote } from '../../store/notes'


const EditNoteModal = ({ note, setMountModal }) => {
  const [name, setName] = useState(note.name)
  const [body, setBody] = useState(note.body)
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  let newNote

  const handleSubmit = (e) => {
    e.preventDefault()
    newNote = { name, body }
    setErrors([])
    const response = dispatch(updateNote(newNote, note.id, note.recipeId))
      .then(() => {
        setErrors([])
        setMountModal(false)
      })
      .catch(async (res) => {
        let data;
        try {
          data = await res.cose().json()
        } catch {
          data = await res.json()
        }
        if (data?.errors) {
          setErrors(data.errors)
        } else if (data) {
          setErrors([data])
        } else {
          setErrors([res.statusText])
        }
      }
    )
  }

  return (
    <>
      <div className="edit-note-modal-window-container">
        <div className="edit-note-modal-content-box">
          <svg className="edit-note-modal-close-button" onClick={(e) => setMountModal(false)} width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-type="handle-close"><path fillRule="evenodd" clipRule="evenodd" d="m21 21.707 5.646 5.647.708-.707L21.707 21l5.647-5.646-.708-.707L21 20.293l-5.646-5.646-.708.707L20.293 21l-5.647 5.646.708.708L21 21.707Z" fill="currentColor"></path></svg>
          <div className="edit-note-modal-form-container">
            <form onSubmit={handleSubmit}>
              <h2 className='edit-note-form-header'>Edit your note</h2>
              <label className='edit-note-form-field-label'>Edit Note
                <div className='edit-note-form-field-label-outer-container'>
                  <div className='edit-note-form-field-label-inner-container'>
                    <textarea
                      value={body}
                      className='edit-note-form-input-box edit-body'
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </div>
                </div>
              </label>
              <label className='edit-note-form-field-label'>Edit Name
                <div className='edit-note-form-field-label-outer-container'>
                  <div className='edit-note-form-field-label-inner-container'>
                    <input
                      value={name}
                      className='edit-note-form-input-box'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </label>
              {errors.map(error => <div className="modal-error-message" key={error}>{error}</div>)}
              <div className='edit-note-form-button-container'>
                <input className="edit-note-form-button" type="submit" value="Update"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditNoteModal
