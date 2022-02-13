export const Note = ({content, date}) => {
    return (
        <li>
            <div><strong>{content}</strong></div>
            <div>{date}</div>
            {/*<div>{note.id}</div>*/}
            <br/>
        </li>
    )
}

// export default Note