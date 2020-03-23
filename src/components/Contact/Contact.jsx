import React from 'react'
import c from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={c.contact}>
            <a name='contact'></a>
            <div className={c.contact_container}>
                <div>E-mail</div>
                <div>Facebook</div>
                <div>Vk</div>
            </div>
        </div>
    )
}

export default Contact