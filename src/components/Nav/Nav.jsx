import React from 'react'
import n from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={n.nav}>
                <a className={n.nav_links} href="#top">Home</a>
                <a className={n.nav_links} href="#about">About</a>
                <a className={n.nav_links} href="#works">Works</a>
                <a className={n.nav_links} href="#contact">Contacts</a>
        </div>
    )
}

export default Nav;