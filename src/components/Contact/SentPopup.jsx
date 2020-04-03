import React from 'react'
import p from './SentPopup.module.scss'

const SentPopup = (props) => {
    return (
        <div className={p.popup_bg}>
            <div className={p.message}>
            <p>Thank you for your letter!</p> 
            <button onClick={props.confirm} >Ok!</button>
            </div>

        </div>
    )
}

export default SentPopup

