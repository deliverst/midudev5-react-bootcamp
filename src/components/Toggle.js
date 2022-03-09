import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Toggle({ children, textButtonShow, textButtonHidden }) {

    const [ visible, setVisible ] = useState(false)
    const hideWhenVisisble = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    return (
        <>
            <div style={ hideWhenVisisble }>
                <button onClick={ () => setVisible(true) }>{ textButtonShow }</button>
            </div>

            <div style={ showWhenVisible }>
                { children }
                <button onClick={ () => setVisible(false) }>{ textButtonHidden }</button>
            </div>

        </>

    )
}