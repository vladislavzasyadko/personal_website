import React from 'react'
import w from './Works.module.scss'
import WorkItem from './WorkItem/WorkItem'

const Works = () => {
    return (
        <div className={w.works}>
            
            <a name='works'></a>
            <div className={w.title}>My works</div>
            <div className={w.works_container}>
                <WorkItem name='Organizer' backgroundImage='https://www.pikpng.com/pngl/m/53-538504_calendar-icons-grey-news-and-events-icon-clipart.png' Url='https://github.com/vladislavzasyadko/organizer-app-angular'/>
                <WorkItem name='TODO List' backgroundImage='' Url='https://github.com/vladislavzasyadko/angular_todolist'/>
                <WorkItem name='Social network' backgroundImage='https://miro.medium.com/fit/c/256/256/0*BRl-uL7N9LF-1hiD.png' 
                Url='https://github.com/vladislavzasyadko/react-course-social-network'/>
            </div>
        </div>
    )
}

export default Works