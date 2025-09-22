import React from 'react'
import './button.scss'

function Buttons({text, type}) {
    return (
        <>
            <button className={`btn ${type}`}>{text}</button>
        </>
    )
}

export default Buttons