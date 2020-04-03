import React from 'react'
import c from './Contact.module.scss'
import SentPopup from './SentPopup'

class Contact extends React.Component {
    
    state = {
        submitted: false
    }

    submitMessage = () => {
        this.setState({
            submitted: true
        })
    }

    confirmSubmit = () => {
        this.setState({
            submitted: false
        })
    }
    
    render() {
        return (
            <div id='contacts'>
                <div className={c.title}>Let's work together!</div>
                {this.state.submitted && <SentPopup confirm={this.confirmSubmit}/>}
                {!this.state.submitted && <MailForm submit={this.submitMessage}/>}
                
                <div className={c.contact}>
                    <ul>
                        <li>
                            <a className={c.contact_links} href='https://www.facebook.com/profile.php?id=100004948894815'>
                                <i class="fab fa-facebook-f icon"></i>
                            </a>
                        </li>
                        <li>
                            <a className={c.contact_links} href='https://twitter.com/vladthegreatest'>
                                <i class="fab fa-twitter icon"></i>
                            </a>
                        </li>
                        <li>
                            <a className={c.contact_links} href='https://www.linkedin.com/mwlite/in/vladislav-zasyadko-55165a1a3'>
                                <i class="fab fa-linkedin-in icon"></i>
                            </a>
                        </li>
                        <li>
                            <a className={c.contact_links} href='mailto:vladislavzasyadko@gmail.com'>
                                <i class="fab fa-google-plus-g icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
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
        if(this.state.name.trim().length && this.state.email.trim().length && this.state.message.trim().length)
        {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        .then(this.props.submit)
        .catch(error => alert(error));
        this.setState({
            name: "",
            email: "",
            message: ""
        })
        }
        e.preventDefault();

    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <div className={c.mail_form}>
                <form name="contact" method="POST"
                    data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <input className={c.mail_info}
                            name="name"
                            type="text"
                            placeholder='Your name'
                            value={name}
                            autoComplete={'off'}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <input className={c.mail_info}
                            name="email"
                            type="email"
                            placeholder='Your email'
                            value={email}
                            autoComplete={'off'}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <textarea className={c.mail_message}
                            name="message"
                            type="text"
                            value={message}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <button className={c.submit_button}
                            type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact