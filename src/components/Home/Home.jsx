import React from 'react'
import h from './Home.module.scss'

const Home = () => {
    return (
        <div id='home' className={h.home}>
            <div>
                <div className={h.text_area}>
                    <div className={h.big_text}>Welcome to my website!</div>
                    <p>Here you will find information about me and about my work as a frontend web developer.</p>
                </div>
            </div>
            <ul class={h.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Home