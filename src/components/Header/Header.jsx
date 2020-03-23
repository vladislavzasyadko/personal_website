import React from 'react'
import h from './Header.module.scss'

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.links}>
                <div className={h.social}><a href="#top">Home</a></div>
                <div className={h.social}><a href="#about">About</a></div>
                <div className={h.social}><a href="#works">Works</a></div>
                <div className={h.social}><a href="#contact">Contacts</a></div>
            </div>
        </div>
    )
}

export default Header