import React from 'react'
import w from './WorkItem.module.scss'

const WorkItem = (props) => {
    return (
        <div className={w.product}>
            <div>
                <div className={w.img_container}></div>
                <div className={w.info}>{props.name}</div>
                <button className={w.btn}>See</button>
            </div>
        </div>
    )
}

export default WorkItem