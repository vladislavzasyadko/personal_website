import React from 'react'
import h from './Home.module.scss'

const Home = () => {
    return (
        <div id='home' className={h.home}>
            <div>

                <div className={h.text_area}>
                    <div className={h.big_text}>Welcome to my website!</div>
                    <p>Consequatur exercitationem velit blanditiis cupiditate molestias. Blanditiis dicta laborum tenetur quam nobis earum beatae quae qui repellendus, eum architecto consequuntur. Nihil, unde.</p>
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