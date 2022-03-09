// IMPORTS
import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import { createNote, setToken } from './services/notes/createNote'
import getAllNotes from './services/notes/getAllNotes'
import loginServices from './services/login'

// COMPONENTS
import CreateNotes from './components/CreateNotes'
import LoginForm from './components/LoginForm'

const App = () => {
    // NOTES
    const [ notes, setNotes ] = useState([])
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    // USER
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ user, setUser ] = useState('')

    useEffect(() => {
        getAllNotes.then((notes) => {
            setNotes(notes)
            console.log('Getting Notes')
        })
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if ( loggedUserJSON ) {
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
        console.log('quitamos el token de localstorage')
    }

    const handleChange = (e) => {
        console.log('body and title: ' + e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
        const noteObject = {
            title: title,
            body: body,
        }

        e.preventDefault()

        createNote(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setTitle('')
                setBody('')
            })
    }

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

        } catch ( e ) {
            console.log(e)
        }

    }

    return (
        <>
            <h1>Notas</h1>
            { user ?
                <CreateNotes
                    notes={ notes }
                    title={ title }
                    body={ body }
                    handleChangeTitle={ (e) => setTitle(e.target.value) }
                    handleChangeBody={ (e) => setBody(e.target.value) }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                    handleLogOut={ handleLogOut }
                />
                :
                <LoginForm
                    username={ username }
                    password={ password }
                    user={ user }
                    handleUsernameChange={ (e) => setUsername(e.target.value) }
                    handlePasswordChange={ (e) => setPassword(e.target.value) }
                    handleSubmitLogin={ handleSubmitLogin }
                />
            }
        </>
    )
}

export default App
