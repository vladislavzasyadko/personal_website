import React from 'react'
import w from './WorkItem.module.scss'

const WorkItem = (props) => {
    return (
        <div className={w.product}>
            <a href={props.Url}>
                <div className={w.product_inner} style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                </div>
            
            <div className={w.info} >{props.name}</div>
            </a>
        </div>
    )
}

export default WorkItem