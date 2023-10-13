import './EditNoteModal.scss'

const EditNoteModal = ({ noteModalOpen, setNoteModalOpen, note }) => {
    // onClick={(e) => setLoginModalMounted(false)}

    return (
        <>
            <div className="modal-window-container">
                <div className="modal-content-box">
                    <svg className="modal-close-button" onClick={() => setNoteModalOpen(false)}width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-type="handle-close"><path fillRule="evenodd" clipRule="evenodd" d="m21 21.707 5.646 5.647.708-.707L21.707 21l5.647-5.646-.708-.707L21 20.293l-5.646-5.646-.708.707L20.293 21l-5.647 5.646.708.708L21 21.707Z" fill="currentColor"></path></svg>
                    {/* <div className="modal-photo-container">
                        <span className="modal-photo-text">
                            Unlock New York Times recipes and your personal recipe box with a free account.
                        </span>
                        <img className="modal-photo" src="https://cooking.nytimes.com/assets/regiwall-souffle-tall.jpg"></img>
                    </div> */}
                    <div className="modal-form-container">
                        <form>
                            <h2 className='edit-note-form-header'>Edit your note</h2>
                            {/* <ul>
                                {errors.map(error => <li key={error}>{error}</li>)}
                            </ul> */}
                            <label className='edit-note-form-field-label'>Edit Note
                                <div className='edit-note-form-field-label-outer-container'>
                                    <div className='edit-note-form-field-label-inner-container'>
                                        <input
                                            type="text"
                                            // value={email}
                                            className='edit-note-form-input-box'
                                            // onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </label>
                            <label className='edit-note-form-field-label'>Edit Name
                                <div className='edit-note-form-field-label-outer-container'>
                                    <div className='edit-note-form-field-label-inner-container'>
                                        <input
                                            type="password"
                                            // value={password}
                                            className='edit-note-form-input-box'
                                            // onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </label>
                            <div className='edit-note-form-button-container'>
                                <button className="edit-note-form-button" type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditNoteModal
