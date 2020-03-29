import React from 'react'
import c from './Contact.module.scss'

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

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class MailForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: "", 
            email: "", 
            message: "" 
        };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <div className={c.mail_form}>
                <form name="contact" action='POST' method="POST" netlify data-netlify='true' onSubmit={this.handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <input className={c.mail_info}  
                            name='name'
                            type="text"
                            placeholder='Your name'
                            value={name}
                            autoComplete={'off'}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input className={c.mail_info}
                            name='email'
                            type="email"
                            placeholder='Your email'
                            value={email}
                            autoComplete={'off'}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <textarea className={c.mail_message}
                            name='message'
                            type="text"
                            placeholder='message'
                            value={message}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className={c.submit_button}
                            type='submit'>
                                Send
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact