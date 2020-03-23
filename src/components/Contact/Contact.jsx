import React from 'react'
import c from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={c.contact}>
            <a name='contact'></a>
            <div className={c.contact_container}>
                <div style={{backgroundImage: `url(https://cdn2.iconfinder.com/data/icons/social-icons-color/512/gmail-512.png)`}}>E-mail</div>
                <div>Facebook</div>
                <div>Vk</div>
            </div>
        </div>
    )
}

export default Contact