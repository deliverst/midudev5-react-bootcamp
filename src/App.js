import React from 'react'
import './App.css'
import {Note} from './Note'
import {useState, useEffect} from 'react'
import loginServices from './services/login'
import getAllNotes from './services/notes/getAllNotes'
import {createNote, setToken} from './services/notes/createNote'
import LoginForm from './components/LoginForm'

const App = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    useEffect(() => {
        getAllNotes.then((notes) => {

            setNotes(notes)
            console.log('Getting Notes')
        })
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            setUser(user)
            setToken(user.token)
            console.log('Getting Token Local Storage')
        }
    }, [])

    const handleLogOut = () => {
        setUser(null)
        setToken(user.token)
        window.localStorage.removeItem('loggedNoteAppUser')
    }

    const handleChange = (e) => {
        setNewNote(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const noteObject = {
            title: newNote,
            body: 'as',
        }

        e.preventDefault()

        createNote(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })
    }

    // const noteToAddToState = {
    //     title: newNote,
    //     body: newNote,
    // }

    // createNote(noteToAddToState).then((newNote) => {
    //     setNotes([...notes, newNote])
    // })

    const handleSubmitLogin = async (e) => {
        e.preventDefault()

        try {
            const user = await loginServices.login({
                username, password
            })

            window.localStorage.setItem(
                'loggedNoteAppUser', JSON.stringify(user)
            )
            setToken(user.token)
            setUser(user)
            setPassword('')
            setUsername('')

        } catch (e) {
            console.log(e)
        }

    }

    const renderNotes = () => {
        return (<>
            <button onClick={handleLogOut}>LogOut</button>
            <ol>
                <h1>Notes</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder={'crear nota'}
                        type="text"
                        onChange={handleChange}
                        value={newNote}/>
                    <button>Crear Nota</button>
                </form>
                {notes.map(note => <Note key={note.id} {...note}/>)}
            </ol>
        </>)
    }

    return (
        <>
            {user ?
                renderNotes() :
                <LoginForm
                    username={username}
                    password={password}
                    user={user}
                    handleUsernameChange={(e) => setUsername(e.target.value)}
                    handlePasswordChange={(e) => setPassword(e.target.value)}
                    handleSubmitLogin={handleSubmitLogin}
                />}


        </>
    )
}

export default App
