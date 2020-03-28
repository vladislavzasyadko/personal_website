import React from 'react'
import h from './Header.module.scss'
import classnames from "classnames";
import {Link} from 'react-scroll'
import ReactDOM from 'react-dom'

const Header = (props) => {
    
    return (
        <div className={classnames(h.header, {[h.header_hidden]: props.visible })}>
            <div className={h.links}>
                <Link to="home" smooth={true} duration={300}>Home</Link>
                <Link to="about" smooth={true} duration={300}>About</Link>
                <Link to="works" smooth={true} duration={300}>Works</Link>
                <Link to="contact" smooth={true} duration={300}>Contacts</Link>
            </div>
            <div class={h.burger}>
            <div class={h.line1}></div>
            <div class={h.line2}></div>
            <div class={h.line3}></div>
        </div>
        </div>
    )
}

export default Header