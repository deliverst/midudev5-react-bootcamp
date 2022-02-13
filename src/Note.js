export const Note = ({userId, id, title, body}) => {
    return (
        <li>
            <div><strong>{title}</strong></div>
            <div>{body}</div>
            {/*<div>{note.id}</div>*/}
            <br/>
        </li>
    )
}

export default Note


