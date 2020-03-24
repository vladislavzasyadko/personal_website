import React from 'react'
import a from './About.module.scss'

const About = () => {
    return (
        <div id='about' className={a.about}>
            <div className={a.bio}>
                <div className={a.img_container}>
                <img src="https://sun9-24.userapi.com/c845120/v845120123/12603b/e0fCudomv8Y.jpg" alt=""/>
                </div>
                <div className={a.info}>
                    <div className={a.description_hello}>Hi! My name is Vladislav Zasyadko. I'm a front-end developer from Saint-Petersburg. Always looking for an opportunity to create.</div>
                    <div className={a.description_info}>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is produced locally from Saint-Petersburg.</div>
                </div>
            </div>
            </div>
    )
}

export default About