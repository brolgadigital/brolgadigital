import React from 'react'

export default function Headers(props) {
    return (
        <div className="heading">
            {props.subtitle ? <p>{props.subtitle}</p> : <></> }
            {props.id ? <h1 id={props.id}>{props.title}</h1> : <h1>{props.title}</h1> }
        </div>
    )
}
