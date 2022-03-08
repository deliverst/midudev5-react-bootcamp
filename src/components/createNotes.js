// export default function CreateNotes({}) {
//     return (
//         <>
//             <button onClick={handleLogOut}>LogOut</button>
//             <ol>
//                 <h1>Notes</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         placeholder={'crear nota'}
//                         type="text"
//                         onChange={handleChange}
//                         value={newNote}/>
//                     <button>Crear Nota</button>
//                 </form>
//                 {notes.map(note => <Note key={note.id} {...note}/>)}
//             </ol>
//         </>
//     )
// }