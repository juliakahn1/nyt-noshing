import { useDispatch, useSelector } from "react-redux"
import { createNote } from "../../store/notes"
import { useState } from "react"

const NoteForm = ({ recipeId }) => {
  useSelector(store => store.notes)
  const [name, setName] = useState("")
  const [body, setBody] = useState("")
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  let note

  const handleSubmit = (e) => {
    e.preventDefault()
    note = { name, body }
    setErrors([])
    dispatch(createNote(note, recipeId))
      .then(() => {
        clearForm()
        setErrors([])
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

  const clearForm = () => {
    setBody('')
    setName('')
    setErrors([])
  }

  const update = (field) => {
    return (e) => {
      switch (field) {
        case 'name':
          setName(e.currentTarget.value)
          break
        case 'body':
          setBody(e.currentTarget.value)
          break
        default:
          console.error('Try again later.')
          break;
      }
    }
  }

  return (
    <>
      <form className="show-note-form" onSubmit={handleSubmit}>
        <div className="show-form-body-label-wrapper">
          <label className="show-form-label" htmlFor="notesBodyInput">Add Note</label>
          <textarea
            className="show-form-body-input"
            placeholder="Share your notes with others cooks..."
            type="text"
            id="notesBodyInput"
            value={body}
            onChange={update('body')}>
          </textarea>
          <div className="show-note-form-errors-container"></div>
        </div>
        <div className="show-form-name-label-wrapper">
          <label className="show-form-label" htmlFor="notesNameInput">Your Name</label>
          <textarea
            className="show-form-name-input"
            placeholder="Enter your name"
            type="text"
            id="notesNameInput"
            value={name}
            onChange={update('name')}>
          </textarea>
        </div>
        <div className="modal-error-message create-errors">{errors[0]}</div>
        <div className="show-form-actions">
          <div className="show-form-buttons">
            <button className="show-form-button-clear" type="reset" onClick={() => clearForm()}>
              Cancel
            </button>
            <input className="show-form-button-submit" type="submit" value="Submit" />
          </div>
        </div>
      </form></>
  )
}

export default NoteForm
