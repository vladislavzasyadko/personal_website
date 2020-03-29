import React from 'react'
import h from './Header.module.scss'
import classnames from "classnames";
import {Link} from 'react-scroll'

const Links = (props) => {
    return (
        <div className={h.links}>
                <Link to="home" smooth={true} duration={300}>Home</Link>
                <Link to="about" smooth={true} duration={300}>About</Link>
                <Link to="works" smooth={true} duration={300}>Works</Link>
                <Link to="contact" smooth={true} duration={300}>Contacts</Link>
        </div>
    )
}

class Header extends React.Component {
    state = {
        menuPoppedOut: false
    }

    activatePopUp = () => {
        this.setState({
            menuPoppedOut: true
        })
    }

    deactivatePopUp = () => {
        this.setState({
            menuPoppedOut: false
        })
    }
    
    render(){
        return(
        <>
        {!this.state.menuPoppedOut &&
        <div className={classnames(h.header, {[h.header_hidden]: this.props.visible })}>
            <Links />
            <div class={h.burger} onClick={this.activatePopUp}>
            <div class={h.line1}></div>
            <div class={h.line2}></div>
            <div class={h.line3}></div>
        </div>
        </div>
        }
        {this.state.menuPoppedOut && 
        <div className={h.vertical_header} onClick={this.deactivatePopUp}>
                <Link onClick={this.deactivatePopUp} to="home" smooth={true} duration={300}>Home</Link>
                <Link onClick={this.deactivatePopUp} to="about" smooth={true} duration={300}>About</Link>
                <Link onClick={this.deactivatePopUp} to="works" smooth={true} duration={300}>Works</Link>
                <Link onClick={this.deactivatePopUp} to="contact" smooth={true} duration={300}>Contacts</Link>
        </div>
        }
        </>
        )
    }
}

export default Header