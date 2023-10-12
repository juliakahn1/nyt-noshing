import "./RecipeNoteItem.scss"

const NoteItem = ({ note }) => {
    return(
        <>
        <div className="show-note-item-wrapper">
            <header className="show-note-item-header">
                <div className="show-note-item-name-timestamp">
                    <h3 className="show-note-item-name">{note.name}</h3>
                    <time className="show-note-item-timestamp"></time>
                </div>
            </header>
            <div className="show-note-item-body-buttons-wrapper">
                <p className="show-note-item-body">{note.body}</p>
            </div>
        </div>
        </>
    )
}

export default NoteItem
