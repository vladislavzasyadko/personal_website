import React from 'react'
import w from './Works.module.scss'
import WorkItem from './WorkItem/WorkItem'

const Works = () => {
    return (
        <div className={w.works}>
            
            <a name='works'></a>
            <div className={w.title}>My works</div>
            <div className={w.works_container}>
                <WorkItem name='Organizer' 
                backgroundImage='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' 
                Url='https://github.com/vladislavzasyadko/organizer-app-angular'/>
                <WorkItem name='TODO List' backgroundImage='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' 
                Url='https://github.com/vladislavzasyadko/angular_todolist'/>
                <WorkItem name='Social network' backgroundImage='https://cdn.worldvectorlogo.com/logos/react.svg' 
                Url='https://github.com/vladislavzasyadko/react-course-social-network'/>
            </div>
        </div>
    )
}

export default Works