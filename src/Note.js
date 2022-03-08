import React from 'react'

// eslint-disable-next-line react/prop-types
export const Note = ({title, body}) => {
    return (
        <li>
            <div><strong>{title}</strong></div>
            <div>{body}</div>
            <br/>
        </li>
    )
}


