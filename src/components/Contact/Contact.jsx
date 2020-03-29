import React from 'react'
import c from './Contact.module.scss'
import facebook from '../../img/facebook.svg'
import google from '../../img/gmail.svg'

const Contact = () => {
    return (
        <div id='contact' className={c.contact}>
            <ul>
                <li>
                    <a href="#">
                        <i class="fab fa-facebook-f icon"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fab fa-twitter icon"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fab fa-linkedin-in icon"></i>
                     </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fab fa-google-plus-g icon"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact