import React from 'react'
import c from './Contact.module.scss'
import facebook from '../../img/facebook.svg'
import google from '../../img/gmail.svg'

const Contact = () => {
    return (
        <div id='contact'>
            <div className={c.title}>Let's work together!</div>
            <MailForm />
            <div className={c.contact}>
                <ul>
                    <li>
                        <a className={c.contact_links}>
                            <i class="fab fa-facebook-f icon"></i>
                        </a>
                    </li>
                    <li>
                        <a className={c.contact_links}>
                            <i class="fab fa-twitter icon"></i>
                        </a>
                    </li>
                    <li>
                        <a className={c.contact_links}>
                            <i class="fab fa-linkedin-in icon"></i>
                        </a>
                    </li>
                    <li>
                        <a className={c.contact_links}>
                            <i class="fab fa-google-plus-g icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const MailForm = () => {
    return (
        <div className={c.mail_form}>
            <form action="POST" data-netlify='true'>
                <div>
                    <input className={c.mail_info} 
                            name='name' 
                            type="text" 
                            placeholder='name'
                            autoComplete={'off'} />
                </div>
                <div>
                    <input className={c.mail_info} 
                            name='email' 
                            type="email" 
                            placeholder='e-mail'
                            autoComplete={'off'} />
                </div>
                <div>
                    <textarea className={c.mail_message} 
                            name='message' 
                            type="text" 
                            placeholder='message'/>
                </div>
                <div>
                    <button className={c.submit_button} 
                            type='submit'>Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact