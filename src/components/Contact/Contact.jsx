import React from 'react'
import c from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={c.contact}>
            <a name='contact'></a>
            <div className={c.contact_container}>
                <div className={c.social}>E-mail</div>
                <div className={c.social}>Facebook</div>
                <div className={c.social}>Vk</div>
            </div>
        </div>
    )
}

export default Contact