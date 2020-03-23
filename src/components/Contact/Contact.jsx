import React from 'react'
import c from './Contact.module.scss'

const Contact = () => {
    return (
        <div className={c.contact}>
            <a name='contact'></a>
            <ul>
                <li>my mail</li>
                <li>facebook</li>
                <li>vk</li>
            </ul>
        </div>
    )
}

export default Contact