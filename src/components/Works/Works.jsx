import React from 'react'
import w from './Works.module.scss'
import WorkItem from './WorkItem/WorkItem'

const Works = () => {
    return (
        <div className={w.works}>My Works
            <a name='works'></a>
            <div>
                <WorkItem name='Organizer' />
                <WorkItem name='TODO List' />
                <WorkItem name='Social network' />
            </div>
        </div>
    )
}

export default Works