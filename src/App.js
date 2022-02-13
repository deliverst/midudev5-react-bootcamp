import './App.css'
import {Note} from './Note'
const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]



const App = () => {
    return (<>
            <ol>
                <h1>Notes</h1>
                {notes.map(note => <Note key={note.id} {...note}/>)}
            </ol>
        </>

    )
}

export default App
