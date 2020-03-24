import React from 'react'
import h from './Header.module.scss'
import classnames from "classnames";

const Header = (props) => {
    return (
        <div className={classnames(h.header, {[h.header_hidden]: props.visible })}>
            <div className={h.links}>
                <a href="#top">Home</a>
                <a onClick={console.log('retard')} href="#about">About</a>
                <a href="#works">Works</a>
                <a href="#contact">Contacts</a>
            </div>
        </div>
    )
}

export default Header