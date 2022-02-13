import './App.css'
import {Note} from './Note'
import {useState, useEffect} from 'react'

const App = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewState] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    setNotes(json)
                    setLoader(false)
                })

        }, 2000)
    }, [])

    const handleChange = (e) => {
        const newNote = e.target.value
        setNewState(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const noteToAddToState = {
            userId: notes.length + 1,
            id: newNote,
            title: newNote,
            body: newNote
        }

        setNotes([...notes, noteToAddToState])
        setNewState('')
    }

    return (
        <>
            <ol>
                <h1>Notes</h1>
                {loader === true ? 'cargado...' : ''}
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
