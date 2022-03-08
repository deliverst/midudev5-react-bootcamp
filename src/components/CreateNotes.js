import {Note} from '../Note'
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function CreateNotes({notes, title, body,handleChangeTitle, handleLogOut, handleSubmit, handleChangeBody}) {

    return (
        <>
            <button onClick={handleLogOut}>LogOut</button>
            <ol>
                <h1>Notes</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder={'Titulo'}
                        type="text"
                        onChange={handleChangeTitle}
                        value={title}
                    />
                    <input
                        placeholder={'Body'}
                        type="text"
                        onChange={handleChangeBody}
                        value={body}
                    />

                    <button>Crear Nota</button>
                </form>
                {/* eslint-disable-next-line react/prop-types */}
                {notes.map(note => <Note key={note.id} {...note}/>)}
            </ol>
        </>
    )
}