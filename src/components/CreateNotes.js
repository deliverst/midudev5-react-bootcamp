import { Note } from '../Note'
import React from 'react'
import Toggle from './Toggle'

// eslint-disable-next-line react/prop-types
export default function CreateNotes({ notes, title, body, handleChangeTitle, handleLogOut, handleSubmit, handleChangeBody }) {

    return (
        <Toggle textButtonShow={ 'MOSTRAR' } textButtonHidden={ 'ESCONDER' }>
            <ol>
                <h1>Notes</h1>
                <button onClick={ handleLogOut }>Logout</button>
                <form onSubmit={ handleSubmit }>
                    <input
                        placeholder={ 'Titulo' }
                        type="text"
                        onChange={ handleChangeTitle }
                        value={ title }
                    />
                    <input
                        placeholder={ 'Body' }
                        type="text"
                        onChange={ handleChangeBody }
                        value={ body }
                    />

                    <button>Crear Nota</button>
                </form>
                {/* eslint-disable-next-line react/prop-types */ }
                { notes.map(note => <Note key={ note.id } { ...note }/>) }
            </ol>
        </Toggle>
    )
}