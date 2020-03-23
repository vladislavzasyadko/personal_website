import React from 'react'
import w from './WorkItem.module.scss'

const WorkItem = (props) => {
    return (
        <div className={w.product} style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <div>
                <div className={w.info} >{props.name}</div>
                <button className={w.btn}><a href={props.Url}> See</a></button>
            </div>
        </div>
    )
}

export default WorkItem