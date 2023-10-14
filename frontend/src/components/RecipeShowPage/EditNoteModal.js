import './EditNoteModal.scss'
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react'
import { updateNote } from '../../store/notes'


const EditNoteModal = ({ noteModalOpen, setNoteModalOpen, note }) => {
    useSelector(store => store.notes)
    const [name, setName] = useState(note.name)
    const [body, setBody] = useState(note.body)
    const dispatch = useDispatch()
    let newNote

    const handleSubmit = (e) => {
        e.preventDefault()
        newNote = { name, body }
        dispatch(updateNote(newNote, note.id, note.recipeId))
        setNoteModalOpen(false)
    }

    // let modal
    // noteModalOpen ? modal = (
    //     <>
    //         <div className="edit-note-modal-window-container">
    //             <div className="edit-note-modal-content-box">
    //                 <svg className="edit-note-modal-close-button" onClick={() => setNoteModalOpen(false)} width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-type="handle-close"><path fillRule="evenodd" clipRule="evenodd" d="m21 21.707 5.646 5.647.708-.707L21.707 21l5.647-5.646-.708-.707L21 20.293l-5.646-5.646-.708.707L20.293 21l-5.647 5.646.708.708L21 21.707Z" fill="currentColor"></path></svg>
    //                 <div className="edit-note-modal-form-container">
    //                     <form onSubmit={handleSubmit}>
    //                         <h2 className='edit-note-form-header'>Edit your note</h2>
    //                         {/* <ul>
    //                             {errors.map(error => <li key={error}>{error}</li>)}
    //                         </ul> */}
    //                         <label className='edit-note-form-field-label'>Edit Note
    //                             <div className='edit-note-form-field-label-outer-container'>
    //                                 <div className='edit-note-form-field-label-inner-container'>
    //                                     <input
    //                                         type="text"
    //                                         value={body}
    //                                         className='edit-note-form-input-box'
    //                                         onChange={(e) => setBody(e.target.value)}
    //                                         required
    //                                     />
    //                                 </div>
    //                             </div>
    //                         </label>
    //                         <label className='edit-note-form-field-label'>Edit Name
    //                             <div className='edit-note-form-field-label-outer-container'>
    //                                 <div className='edit-note-form-field-label-inner-container'>
    //                                     <input
    //                                         value={name}
    //                                         className='edit-note-form-input-box'
    //                                         onChange={(e) => setName(e.target.value)}
    //                                         required
    //                                     />
    //                                 </div>
    //                             </div>
    //                         </label>
    //                         <div className='edit-note-form-button-container'>
    //                             <input className="edit-note-form-button" type="submit" value="Update" />
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // ) : modal = (<></>)

    return (
        <>
            <div className="edit-note-modal-window-container">
                <div className="edit-note-modal-content-box">
                    <svg className="edit-note-modal-close-button" onClick={() => setNoteModalOpen(false)}width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-type="handle-close"><path fillRule="evenodd" clipRule="evenodd" d="m21 21.707 5.646 5.647.708-.707L21.707 21l5.647-5.646-.708-.707L21 20.293l-5.646-5.646-.708.707L20.293 21l-5.647 5.646.708.708L21 21.707Z" fill="currentColor"></path></svg>
                    <div className="edit-note-modal-form-container">
                        <form onSubmit={handleSubmit}>
                            <h2 className='edit-note-form-header'>Edit your note</h2>
                            {/* <ul>
                                {errors.map(error => <li key={error}>{error}</li>)}
                            </ul> */}
                            <label className='edit-note-form-field-label'>Edit Note
                                <div className='edit-note-form-field-label-outer-container'>
                                    <div className='edit-note-form-field-label-inner-container'>
                                        <input
                                            type="text"
                                            value={body}
                                            className='edit-note-form-input-box'
                                            onChange={(e) => setBody(e.target.value)}
                                            required
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
                                            required
                                        />
                                    </div>
                                </div>
                            </label>
                            <div className='edit-note-form-button-container'>
                                <input className="edit-note-form-button" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditNoteModal
