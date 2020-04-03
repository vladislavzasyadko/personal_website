import React from 'react'
import a from './About.module.scss'

const About = () => {
    return (
        <div id='about' className={a.about}>
            <div className={a.bio}>
                <div className={a.img_container}>
                <div className={a.img_bg}/>
                </div>
                <div className={a.info}>
                    <div className={a.description_hello}>Hi! My name is Vladislav Zasyadko. I'm a front-end developer from Saint-Petersburg.</div>
                    <div className={a.description_info}> I'm a software engineering student at Peter the Great St.Petersburg Polytechnic University. 
                    Always looking for an opportunity to create. I am passionate about building excellent software that improves the lives of those around me. 
                    All of my work is produced locally from Saint-Petersburg.</div>
                </div>
            </div>
            </div>
    )
}

export default About