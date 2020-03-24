import React from 'react'
import h from './Header.module.scss'
import classnames from "classnames";
import {Link} from 'react-scroll'

const Header = (props) => {
    return (
        <div className={classnames(h.header, {[h.header_hidden]: props.visible })}>
            <div className={h.links}>
                <Link to="home" smooth={true} duration={300}>Home</Link>
                <Link to="about" smooth={true} duration={300}>About</Link>
                <Link to="works" smooth={true} duration={300}>Works</Link>
                <Link to="contact" smooth={true} duration={300}>Contacts</Link>
            </div>
        </div>
    )
}

export default Header