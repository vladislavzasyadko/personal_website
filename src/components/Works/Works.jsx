import React from 'react'
import w from './Works.module.scss'
import WorkItem from './WorkItem/WorkItem'
import social from './../../img/social.svg'
import todo from './../../img/todolist2.svg'
import organizer from './../../img/organizer.svg'
import graph from './../../img/graph.svg'


const Works = () => {
    return (
        <div id='works' className={w.works}>
            <div className={w.title}>My works</div>
            <div className={w.works_container}>
                <WorkItem name='Organizer' 
                backgroundImage={organizer} 
                Url='https://github.com/vladislavzasyadko/organizer-app-angular'/>
                <WorkItem name='TODO List' backgroundImage={todo} 
                Url='https://github.com/vladislavzasyadko/angular_todolist'/>
                <WorkItem name='Social network' backgroundImage={social} 
                Url='https://github.com/vladislavzasyadko/react-course-social-network'/>
                <WorkItem name='Charts' backgroundImage={graph} 
                Url='https://github.com/vladislavzasyadko/charts-and-statistics'/>
            </div>
        </div>
    )
}

export default Works