import React from 'react'
import './button.scss'

function Buttons({text, variant ='primary', onClick}) {
    return (
        <>
            <button className={`btn ${variant}`} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default Buttons