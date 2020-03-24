import React from 'react'
import c from './Contact.module.scss'
import facebook from '../../img/facebook.svg'
import google from '../../img/gmail.svg'

const Contact = () => {
    return (
        <div id='contact' className={c.contact}>
                <div className={c.social} style={{ backgroundImage: `url(${google})` }}> </div>
                <div className={c.social} style={{ backgroundImage: `url(${facebook})` }}> </div>
        </div>
    )
}

export default Contact