import './App.css'
import {Note} from './Note'
import {useState, useEffect} from 'react'
// import axios from 'axios'
import getAllNotes from './services/notes/getAllNotes'
import createNote from './services/notes/createNote'

const App = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    // const [loader, setLoader] = useState(false)

    useEffect(() => {
        getAllNotes.then((notes) => {
            console.log(notes)
            setNotes(notes)
        })
    }, [])

    const handleChange = (e) => {
        // const newNote = e.target.value
        setNewNote(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const noteToAddToState = {
            title: newNote,
            body: newNote,
            userId: 1
        }
        console.log(noteToAddToState)

        createNote(noteToAddToState).then((newNote) => {
            setNotes([...notes, newNote])
        })

    }

    return (
        <>
            <ol>
                <h1>Notes</h1>
                {/*{loader === true ? 'cargado...' : ''}*/}
                {notes.map(note => <Note key={note.id} {...note}/>)}
            </ol>

            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote}/>
                <button>Crear Nota</button>
            </form>
        </>

    )
}

export default App
